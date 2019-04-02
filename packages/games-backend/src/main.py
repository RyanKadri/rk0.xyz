from flask import Flask, jsonify, request

from games.connect_four import connectFourMove
from games.tic_tac_toe import calcNextMove

app = Flask(__name__)

@app.route("/api/tic-tac-toe/nextMove", methods=["POST"])
def calcMove():
    board = request.json
    nextMove = calcNextMove(board)
    return jsonify(nextMove)

@app.route("/api/connect-4/nextMove", methods=["POST"])
def calcMoveConnectFour():
    board = request.json
    nextMove = connectFourMove(board)
    return jsonify(nextMove)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
