ME = 2
OPPONENT = 1
BLANK = 0

WIN = 1
LOSS = 2
TIE = 3
ONGOING = 4

nextMoveDict = {}

def calcNextMove(board):
    hash = _hashBoard(board)
    move, _ = nextMoveDict.get(hash)
    return { "row": move[0], "column": move[1] }

def _precalcMoves(board, currentPlayer = OPPONENT):

    hash = _hashBoard(board)
    precalcVal = nextMoveDict.get(hash)
    if precalcVal != None:
        return precalcVal[1]

    best = None
    bestScore = None
    totalScore = 0
    opponent = _otherPlayer(currentPlayer)
    free = _freeSpaces(board)

    for space in free:
        board[space[0]][space[1]] = currentPlayer

        outcome = _checkOutcome(board, currentPlayer)
        if outcome == WIN:
            score = 1
        elif outcome == TIE:
            score = 0
        else:
            score = -(1/len(free)) * _precalcMoves(board, opponent)

        totalScore += score
        if bestScore == None or score > bestScore:
            best = space
            bestScore = score
        board[space[0]][space[1]] = BLANK
    nextMoveDict[hash] = (best, totalScore)
    return totalScore
    
def _hashBoard(board):
    hash = 0
    for rowInd, row in enumerate(board):
        for colInd, col in enumerate(row):
            ind = 3 * rowInd + colInd
            hash += col * 3 ** ind
    return hash

def _freeSpaces(board):
    allSpaces = [(x,y) for x in range(0,3) for y in range(0,3)]
    free = [space for space in allSpaces if board[space[0]][space[1]] == BLANK]
    return free

TRIPLES_TO_CHECK = [
    [(0,0), (1,1), (2,2)],
    [(2,0), (1,1), (0,2)]
] + [[(x,y) for x in range(3)] for y in range(3)] + [[(y,x) for x in range(3)] for y in range(3)]

def _checkOutcome(board, currentPlayer):
    for triple in TRIPLES_TO_CHECK:
        outcome = _checkTriple(board, triple)
        if outcome == _otherPlayer(currentPlayer):
            return LOSS
        elif outcome == currentPlayer:
            return WIN
    for row in board:
        for col in row:
            if col == BLANK:
                return ONGOING
    return TIE

def _otherPlayer(currentPlayer):
    return OPPONENT if currentPlayer == ME else ME    

def _checkTriple(board, triple):
    a,b,c = [board[cell[0]][cell[1]] for cell in triple]
    
    if a == b and b == c:
        return a
    else:
        return BLANK

initBoard = [[BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK]]
_precalcMoves(initBoard)