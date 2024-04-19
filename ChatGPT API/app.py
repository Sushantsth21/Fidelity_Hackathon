from flask import Flask, render_template, request
import openai
from dotenv import load_dotenv
import os

app = Flask(__name__)

load_dotenv()
MY_ENV_VAR = os.getenv('OPENAI_API_KEY')
# Ensure the OPENAI_API_KEY environment variable is set
api_key = MY_ENV_VAR
if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

#the api-key workds

openai.api_key = api_key
print(api_key)
# Define the default route to return the index.html file
@app.route("/")
def index():
    return render_template("index.html")

# Define the /api route to handle POST requests
@app.route("/api", methods=["POST"])
def api():
    # Get the message from the POST request
    message = request.json.get("message")
    # Send the message to OpenAI's API and receive the response
    
    
    completion = openai.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": message}
    ]
    )
    if completion.choices[0].message!=None:
        return completion.choices[0].message

    else :
        return 'Failed to Generate response!'
    

if __name__=='__main__':
    app.run()

