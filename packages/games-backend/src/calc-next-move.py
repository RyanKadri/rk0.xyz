import json
import sys

from games.connect_four import calcNextMove as connectFourMove
from games.tic_tac_toe import calcNextMove as ticTacToeMove


def ticTacToeHandler(event, context):
    board = json.loads(event["body"])
    nextMove = ticTacToeMove(board)
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(nextMove)
    }

def connectFourHandler(event, context):
    board = json.loads(event["body"])
    nextMove = connectFourMove(board)
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(nextMove)
    }
