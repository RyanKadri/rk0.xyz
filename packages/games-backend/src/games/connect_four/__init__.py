from random import randint

def connectFourMove(board):
    randCol = randint(0, len(board[0]) - 1)
    if not isFull(board, randCol):
        return { "column": randCol }
    else:
        for col in range(7):
            if not isFull(board, col):
                return { "column": col }
        else:
            return { "column": -1 }

def isFull(board, col):
    for row in board:
        if row[col] == 0:
            return False
    else:
        return True