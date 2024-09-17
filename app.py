from flask import Flask, jsonify
from blockchain import Blockchain

app = Flask(__name__)
blockchain = Blockchain();

@app.route('/', method=["GET"])
def blocks():
    return jsonify(blockchain.chain)

if __name__=='__main__':
    app.run(port=3000)