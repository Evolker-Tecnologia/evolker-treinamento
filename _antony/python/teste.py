from flask import Flask
import json

objeto = [
    'teste',
    {
        'nome':'antony',
        'idade': 18,
        'gostos': ('sinuca', 'flow podcast', 'correr')
    }
]

json = json.dumps(objeto, sort_keys=True, indent=4)

app = Flask(__name__)

@app.route('/json')
def show_json():
    return json