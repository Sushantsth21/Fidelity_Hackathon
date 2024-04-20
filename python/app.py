import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
MY_ENV_VAR = os.getenv('OPENAI_API_KEY')
# Ensure the OPENAI_API_KEY environment variable is set
api_key = MY_ENV_VAR
if api_key is None:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

#the api-key workds
print(api_key)
client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-4-turbo",
  messages=[
    {"role": "system", "content": "You are a knowledgeable assistant, skilled in explaining complex financial concepts with clarity and insight."},
    {"role": "user", "content": "Can you GIVE ME YOUTUBE VIDEO LINKS ABOUT COMPOUND INTREST. SPECIFIC VIDEO LINKS PLEASE"}
  ]
)

print(completion.choices[0].message)