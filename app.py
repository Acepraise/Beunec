from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "I start this python in the name of God the Father, Son and Holyspirit. Amen!"

if __name__ == '__main__':
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
