from flask import Flask, render_template, request
import os
from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
introduction_message = "Greetings! I'm Khutruke, your dedicated virtual financial assistant proudly brought to you by FidelityXOpenAI. How may I be of service to you today?"
if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

# Set the OpenAI API key
openai.api_key = api_key

app = Flask(__name__)
user_inputs = []  # List to store user inputs

@app.route('/', methods=['GET', 'POST'])
def index():
    global user_inputs  # Declare user_inputs as global to access and modify it within the function
    response_text = ""
    if request.method == 'POST':
        user_question = request.form['text_input']
        response_text = get_openai_response(user_question)
        user_inputs.append(user_question)  # Append the user input to the list
    else:
        # Display introduction message when the page is loaded for the first time or when "Clear" is clicked
        response_text = introduction_message

    return render_template('index.html', response_text=response_text)

def get_openai_response(user_input):
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful financial assistant. Provide a feedback within 3 sentences. Dont forget you are  Khutruke,  dedicated virtual financial assistant proudly brought to you by FidelityXOpenAI"},
                {"role": "user", "content": user_input}
            ]
        )
        return completion.choices[0].message['content']
    except Exception as e:
        return f"An error occurred: {str(e)}"

if __name__ == "__main__":
    app.run(debug=True)

# Concatenate all user inputs into a single string
all_user_inputs = ' '.join(user_inputs)
print(all_user_inputs)
