import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

const styles = createStyles({
    keyboard: {
        padding: 16,
        justifyContent: "space-between",
        overflowX: "auto",
        whiteSpace: "nowrap",
        position: "relative"
    },
    note: {
        padding: 8,
        width: 48,
        height: 128,
        border: "solid 1px #ccc",
        overflow: "hidden",
        display: "inline-block",
        margin: 1,
        "&:hover": {
            backgroundColor: "hsla(82, 50%, 80%, 1)"
        }
    },
    noteContent: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    blackNote: {
        position: "absolute",
        backgroundColor: "#444",
        color: "white",
        transform: "translate(-24px, -36px)",
        border: "solid 1px #222",
        "&:hover": {
            backgroundColor: "hsla(82, 50%, 17%, 1)"
        }
    },
    notePos: {
        fontSize: "x-small"
    }
})

const lowNote = 55;
const totalNotes = 88;
const noteInfo = [
    { noteName: "A", isBlackNote: false},
    { noteName: "B♭", isBlackNote: true},
    { noteName: "B", isBlackNote: false},
    { noteName: "C", isBlackNote: false},
    { noteName: "C♯", isBlackNote: true},
    { noteName: "D", isBlackNote: false},
    { noteName: "E♭", isBlackNote: true},
    { noteName: "E", isBlackNote: false},
    { noteName: "F", isBlackNote: false},
    { noteName: "F♯", isBlackNote: true},
    { noteName: "G", isBlackNote: false},
    { noteName: "G♯", isBlackNote: true}
];

const notes: Note[] = new Array(totalNotes).fill(undefined).map((_, i) => {
    const info = noteInfo[i % noteInfo.length];
    const freq = lowNote * Math.pow(2, (i + 1) / 12);
    return {
        name: info.noteName,
        pos: Math.floor(i / noteInfo.length),
        freq,
        isBlackNote: info.isBlackNote
    };
})


const _Keyboard = ({ classes, onNotePressed, onNoteReleased }: Props) => (
    <div className={ classes.keyboard }>
        { notes.map(note => 
            <div className={`${classes.note} ${note.isBlackNote ? classes.blackNote : ""}`} key={ note.freq }
                 onMouseDown={ () => onNotePressed(note) } onMouseUp={ () => onNoteReleased(note) }
            >
                <div className={classes.noteContent}>
                    <span>{ note.name }<small className={ classes.notePos }>{ note.pos }</small></span>
                </div>
            </div>
        ) }
    </div>
)

export const Keyboard = withStyles(styles)(_Keyboard)

interface Props extends WithStyles<typeof styles> {
    onNotePressed(note: Note): void;
    onNoteReleased(note: Note): void;
}

export interface Note {
    name: string;
    pos: number;
    freq: number;
    isBlackNote: boolean
}