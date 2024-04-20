from flask import Flask, render_template, request
import os
import pandas
import numpy
import re 
import requests
from dotenv import load_dotenv
import openai
import warnings
import subprocess
import time

warnings.filterwarnings("ignore")

# Load environment variables
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
introduction_message = "Greetings! I'm Khutruke, your dedicated virtual financial assistant proudly brought to you by FidelityXOpenAI. How may I be of service to you today?"
if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

# Set the OpenAI API key
openai.api_key = api_key
def launch_second_app():
    subprocess.Popen(["python", "video_reocmmendation/app.py"])
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
        
        # Extract keywords after receiving the user input
        extracted_keywords = extract_keywords(user_inputs)
    else:
        # Display introduction message when the page is loaded for the first time or when "Clear" is clicked
        response_text = introduction_message

    return render_template('index.html', response_text=response_text)

@app.route('/quit', methods=['GET'])
def quit_server():
    result = extract_keywords(user_inputs)
    with open("result.txt", "w") as file:
        file.write(result)
    launch_second_app()  # Launch the second Flask app
    time.sleep(13)  # Introduce a delay of 5 seconds
    os._exit(0)  # Exit the server process
    

app.route('/send_data', methods=['POST'])
def send_data():
    user_inputs = request.json.get('user_inputs')
    result = extract_keywords(user_inputs)
    data = {'result': result}
    response = requests.post('http://localhost:5001/receive_data', json=data)
    return response.text


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

def extract_keywords(user_inputs):
    if not user_inputs:
        return ""  # Return an empty string if no user inputs are provided

    all_user_inputs = ' '.join(user_inputs)
    all_user_inputs_lower = all_user_inputs.lower() 
    unique_user_inputs = list(set(all_user_inputs_lower.split()))
    unique_user_inputs.append("finance")
    result_string = ' '.join(unique_user_inputs) + " "
    try:
        completion2 = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Extract 5 keywords related to finance from the text provided. Also, only write 5 outputs and nothing else."},
                {"role": "user", "content": result_string}
            ]
        )
        return completion2.choices[0].message['content']
    except Exception as e:
        return f"An error occurred: {str(e)}"

if __name__ == "__main__":
    app.run(debug=False, port= 5000)
    