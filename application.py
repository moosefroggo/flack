import os

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

if __name__ == "__main__":
    socketio.run(app)

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on("message sent")
def on_message(data):
    message = data["message"]
    emit("recieve message", {"message" : message}, broadcast = True)