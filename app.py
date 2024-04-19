from flask import Flask, render_template, request 
import openai  # Import the whole openai module

def create_app():
    app = Flask(__name__)
    openai.api_key = "sk-proj-hAXw2glXDHUYNwpZYhv0T3BlbkFJSfwZNlnkJHXqroBKl7Mb"  # Set API key directly or through environment variable

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/answer", methods=["GET", "POST"])
    def answer():
        data = request.get_json()
        message = data["message"]

        def generate():
            stream = openai.ChatCompletion.create(
                model="gpt-4",
                messages=[{"role": "user", "content": message}],
                stream=True
            ) 

            for chunk in stream:
                if chunk.choices[0].delta.content is not None:
                    yield(chunk.choices[0].delta.content)

        return app.response_class(generate(), content_type="text/plain")

    return app
