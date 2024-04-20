from flask import Flask, render_template
import pandas as pd
import numpy as np
import re
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

app = Flask(__name__)

file_path = "video_reocmmendation\daaraa.csv"
try:
    # Attempt to read the CSV with a comma delimiter
    df = pd.read_csv(file_path, encoding='ISO-8859-1')
except pd.errors.ParserError:
    try:
        # Attempt to read the CSV with a semicolon delimiter
        df = pd.read_csv(file_path, encoding='ISO-8859-1', delimiter=';')
    except Exception as e:
        print(f"Failed to read the file with a semicolon delimiter: {e}")
# Calculate the minimum number of non-null items
thresh = len(df) * 0.5

# Preprocessing functions
def clean_text(text):
    text = text.lower()
    text = re.sub('\s+', ' ', text)
    text = re.sub('[^a-zA-Z0-9]', ' ', text)
    return text

def tokenize(text):
    lemma = WordNetLemmatizer()
    tokens = word_tokenize(text)
    stop_words = set(stopwords.words('english'))
    no_stops = [t for t in tokens if t.lower() not in stop_words]
    lemma_result = [lemma.lemmatize(item) for item in no_stops]
    return lemma_result

def clean_text_func(text):
    '''Make text lowercase, removing special characters'''
    text = text.lower()
    # remove multiple whitespaces
    text = re.sub('\s+',' ', text)
    # remove characters that not words
    text=re.sub('[^a-zA-Z0-9]',' ',text)
    return text


# Drop columns where more than 50% of the entries are NaN
df.dropna(axis=1, thresh=thresh, inplace=True)
df['Views'] = df['Views'].str.replace(' views', '').str.replace(',', '').astype(int)
df['Priority'] = df['Priority'].astype(int)
clean_text = lambda x: clean_text_func(x)
df['Keywords'] = df['Keywords'].apply(clean_text)
# Vectorization
vect = CountVectorizer(stop_words='english',
                       tokenizer=tokenize,
                       lowercase=True,
                       token_pattern='(?u)\\b\\w\\w\\w+\\b')
X = vect.fit_transform(df['Keywords'])

# Recommendation function
def recommend_videos(query, n):
    query_vect = vect.transform([query])
    similarity = cosine_similarity(query_vect, X).flatten()
    top_indices = np.argsort(similarity)[-n:][::-1]
    recommended_videos = df.iloc[top_indices].copy()
    recommended_videos['similarity'] = similarity[top_indices]
    recommended_videos['finalscore'] = recommended_videos['similarity'] * recommended_videos['Priority'].map({1: 1.33, 2: 1.0}).fillna(1)
    recommended_videos.sort_values(by='finalscore', ascending=False, inplace=True)
    return recommended_videos[['Title', 'Link', 'Priority', 'similarity', 'finalscore']]

# Flask route
@app.route('/')
def index():
    # Assuming the query is obtained from a form submission or elsewhere
    with open("result.txt", "r") as file:
        query = file.read().strip()  # Read the query and strip any leading/trailing whitespace

    # Recommend videos based on the query
    recommended_videos = recommend_videos(query, 6)

    # Pass the recommended videos to the template
    return render_template('index.html', recommended_videos=recommended_videos)

if __name__ == "__main__":
    app.run(debug=True)
