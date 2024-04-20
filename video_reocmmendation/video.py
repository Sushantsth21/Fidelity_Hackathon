import pandas as pd
import numpy as np
import re
import string
from sklearn.metrics.pairwise import cosine_similarity

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

# Drop columns where more than 50% of the entries are NaN
df.dropna(axis=1, thresh=thresh, inplace=True)
df['Views'] = df['Views'].str.replace(' views', '').str.replace(',', '').astype(int)
df['Priority'] = df['Priority'].astype('category')
# Build a function to apply the text cleaning techniques


def clean_text_func(text):
    '''Make text lowercase, removing special characters'''
    text = text.lower()
    # remove multiple whitespaces
    text = re.sub('\s+',' ', text)
    # remove characters that not words
    text=re.sub('[^a-zA-Z0-9]',' ',text)
    return text

clean_text = lambda x: clean_text_func(x)
df['Keywords'] = df['Keywords'].apply(clean_text)
import nltk
from nltk import WordNetLemmatizer
from nltk.corpus import stopwords
import re
nltk.download('wordnet')

def lemma_tokens(tokens, lemma):
    lemma_result = [lemma.lemmatize(item) for item in tokens]
    return(lemma_result)

def tokenize(text):
    lemma = nltk.WordNetLemmatizer()
    text = re.sub("[^a-zA-Z]", " ", text)
    tokens = nltk.word_tokenize(text)

    # English Stop words
    # Re-add the additional stop words since we are recreating the document-term matrix
    stop_words = stopwords.words('english')

    # Remove all stop words: no_stops
    no_stops = [t for t in tokens if t not in stop_words]

    lemma = lemma_tokens(no_stops, lemma)
    return(lemma)
from sklearn.feature_extraction.text import CountVectorizer
import nltk
nltk.download('stopwords')

from nltk.corpus import stopwords


# Re-add the additional stop words since we are recreating the document-term matrix
stop_words = stopwords.words('english')

# stop_words = text.ENGLISH_STOP_WORDS.union(add_stop_words)

vect = CountVectorizer(stop_words= stop_words,
                       analyzer='word',
                       max_features = 5000,
                       tokenizer = tokenize,
                       lowercase = True,
                       token_pattern='(?u)\\b\\w\\w\\w+\\b')

# Fit and transform
nltk.download('punkt')              #this needs to be added or else the code wont run.
nltk.download('wordnet')
X = vect.fit_transform(df.Keywords)

def extract_text(input_string):
    text_only = re.sub(r'[^a-zA-Z0-9\s]', '', input_string)
    return text_only.strip()

def recommend_videos(query, vect, X, df,n):
    # Transform the query to the same vector space as the corpus
    query_vect = vect.transform([query])
    
    # Calculate the cosine similarity between the query vector and all the vectors in the document-term matrix
    similarity = cosine_similarity(query_vect, X).flatten()
    
    # Get the top indices based on raw similarity scores
    top_indices = np.argsort(similarity)[-n:][::-1]
    
    # Fetch the titles, links, priorities, and similarity scores for the top 5 videos
    recommended_videos = df.iloc[top_indices].copy()
    recommended_videos.loc[:, 'similarity'] = similarity[top_indices]
    
    # Define boosting factors for each priority
    priority_factors = {1: 1.33, 2: 1.0}  # Priority 1 is boosted by 33%
    
    # Apply the boosting factor based on priority
    recommended_videos.loc[:, 'finalscore'] = recommended_videos.apply(
        lambda x: x['similarity'] * priority_factors.get(x['Priority'], 1), axis=1)
    
    # Sort the DataFrame by 'finalscore' in descending order
    recommended_videos.sort_values(by='finalscore', ascending=False, inplace=True)
    
    return recommended_videos[['Title', 'Link', 'Priority', 'similarity', 'finalscore']]

if __name__ == "__main__":
    
    with open("result.txt", "r") as file:
        query = file.read().strip()  # Read the query and strip any leading/trailing whitespace

    # Example usage

    query_vector = extract_text(query)  # Assuming extract_text extracts vector representation of text
    n = 10  # Number of recommended videos
    recommended_videos = recommend_videos(query_vector, vect, X, df, n)  # Assuming recommend_videos returns recommended videos
    print(recommended_videos)  # Print recommended videos

