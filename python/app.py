import os
from openai import OpenAI

# Temporarily set the environment variable in code
os.environ['OPENAI_API_KEY'] = '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'

# Get the API key from the environment variable
api_key = os.getenv('OPENAI_API_KEY')

if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")


client = OpenAI(api_key= api_key)

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

print(completion.choices[0].message)