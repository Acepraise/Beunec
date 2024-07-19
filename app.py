from flask import Flask, render_template

app = Flask(name)

@app.route('/')
def home():
    return 'Hello, Beunec!'

if name == 'main':
    app.run(debug=True)