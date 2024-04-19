from flask import flask, render_template,  request
from openai import OpenAPI

client = OpenAPI()

def create_app():
    app = Flask(__name__)
    @app.route("/")

    def index():
        return render_template("index.html")
    return app