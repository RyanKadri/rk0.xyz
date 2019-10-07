import cors from "cors";
import express from "express";
import { calcBoard, CellStates, nextMoveTic } from "./games/tic_tac_toe";

const app = express();
app.use(cors());

const port = 8080;

app.get("/api", (_, resp) => {
    resp.send("Healthy!")
})

app.get("/api/games/tic-tac-toe/next-move" ,(req, resp) => {
    const board = JSON.parse(req.query.board);
    const nextMove = nextMoveTic(board);
    resp.send(nextMove);
})

console.log("Precalculating Moves...");
calcBoard(CellStates.ME);
calcBoard(CellStates.OPPONENT);
app.listen(port, () => {
    console.log(`Tic Tac Toe server running on port ${port}`)
})