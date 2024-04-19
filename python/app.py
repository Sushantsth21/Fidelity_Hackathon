import os
import openai

# Temporarily set the environment variable in code
os.environ['OPENAI_API_KEY'] = 'sk-proj-hAXw2glXDHUYNwpZYhv0T3BlbkFJSfwZNlnkJHXqroBKl7Mb'

# Get the API key from the environment variable
api_key = os.getenv('OPENAI_API_KEY')

if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

# Set the API key for all requests
openai.api_key = api_key

# Set up the request to the API
response = openai.Completion.create(
    model="gpt-3.5-turbo", 
    prompt="Translate the following English text to French: 'Hello, how are you?'", 
    max_tokens=60
)

# Print out the response from the API
print(response.choices[0].text.strip())
