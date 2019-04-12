from flask import Flask, jsonify, request

from flask_cors import CORS
from games.connect_four import calcNextMove as connectFourMove
from games.tic_tac_toe import calcNextMove as ticTacToeMove

app = Flask(__name__)
CORS(app)

@app.route("/api/tic-tac-toe/next-move", methods=["POST"])
def calcMove():
    board = request.json
    nextMove = ticTacToeMove(board)
    return jsonify(nextMove)

@app.route("/api/connect-four/next-move", methods=["POST"])
def calcMoveConnectFour():
    board = request.json
    nextMove = connectFourMove(board)
    return jsonify(nextMove)

@app.route("/api", methods=["GET"])
def rootRoute():
    return "Hello friend! You made a request to: " + request.url

if __name__ == "__main__":
    app.run(host="0.0.0.0")
