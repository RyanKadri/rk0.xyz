import json
import sys

from games.connect_four import connectFourMove
from games.tic_tac_toe import calcNextMove


def lambda_handler(event, context):
    board = json.loads(event["body"])
    nextMove = calcNextMove(board)
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(nextMove)
    }
