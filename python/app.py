import os
import openai

# Ensure the OPENAI_API_KEY environment variable is set
api_key = os.getenv('OPENAI_API_KEY')
if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

# Configure the OpenAI library to use the API key
openai.api_key = api_key

print(api_key)
