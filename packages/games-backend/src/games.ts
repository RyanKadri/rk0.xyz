import cors from "cors";
import express from "express";
import { Board, calcBoard, CellStates, nextMoveTic } from "./games/tic_tac_toe";

const app = express();
app.use(cors());

const port = 8080;

app.get("/api", (_, resp) => {
    resp.send("Healthy!")
})

const badStructure = { error: "Invalid structure for the current board state" };
app.get("/api/games/tic-tac-toe/next-move" ,(req, resp) => {
    if(!req.query.board) {
        resp.send({ error: "You must provide the current state of the board" })
        return;
    }
    let board: Board;
    try {
        board = JSON.parse(req.query.board);
    } catch (e) {
        resp.send(badStructure);
        return;
    }
    
    if(!Array.isArray(board) || board.length < 3 || board[0].length < 3) {
        resp.send(badStructure);
        return;
    }
    const nextMove = nextMoveTic(board);
    resp.send(nextMove);
})

console.log("Precalculating Moves...");
calcBoard(CellStates.OPPONENT);
app.listen(port, () => {
    console.log(`Tic Tac Toe server running on port ${port}`)
})