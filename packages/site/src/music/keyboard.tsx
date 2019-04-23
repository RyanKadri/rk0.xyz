import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";

const styles = createStyles({
    keyboard: {
        padding: 32,
        justifyContent: "space-between",
        overflowX: "auto",
        whiteSpace: "nowrap",
        position: "relative"
    },
    note: {
        padding: 8,
        width: 48,
        height: 168,
        border: "solid 1px #ccc",
        overflow: "hidden",
        display: "inline-block",
        margin: 1,
        borderRadius: 2,
        userSelect: "none",
        touchAction: "manipulation",
        "&:hover, &$pressed": {
            borderBottom: "solid 3px"
        },
        "&:hover": {
            borderBottomColor: "hsla(82, 50%, 80%, 1)"
        },
        "&$pressed": {
            borderBottomColor: "hsla(82, 70%, 80%, 1)"
        },
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
        transform: "translate(-24px, -48px)",
        border: "solid 1px #222",
        "&:hover": {
            borderBottom: "solid 3px",
            borderBottomColor:  "hsla(82, 50%, 17%, 1)"
        },
        "&$pressed":{
            borderBottomColor:  "hsla(82, 70%, 17%, 1)"
        },
        "& $keyIndicator":{
            color: "#ccc"
        }
    },
    notePos: {
        fontSize: "x-small"
    },
    keyIndicator: {
        color: "#888",
        "@media (max-width: 500px)": {
            display: 'none'
        }
    },
    pressed: {
    }
})

const lowNote = 55;
const baseScale = 1;
const keyboardStart = 24;
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

const keyNotes = ["a", "w", "s","d", "r", "f", "t", "g", "h", "u", "j", "i", "k", "o", "l", ";"];

const notes: Note[] = new Array(totalNotes).fill(undefined).map((_, i) => {
    const info = noteInfo[i % noteInfo.length];
    const freq = lowNote * Math.pow(2, i / 12);
    return {
        name: info.noteName,
        pos: Math.floor(i / noteInfo.length) + baseScale,
        freq,
        isBlackNote: info.isBlackNote,
        key: i >= keyboardStart && i < keyboardStart + keyNotes.length 
            ? keyNotes[i - keyboardStart]
            : null
    };
});

const _Keyboard = ({ classes, onNotePressed, onNoteReleased, pressedKeys }: Props) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            const keyInd = keyNotes.indexOf(e.key);
            if(keyInd !== -1) {
                const note = notes[keyboardStart + keyInd];
                if (e.type === "keydown" && !pressedKeys.includes(note)) {
                    onNotePressed(note);
                } else if (e.type === "keyup") {
                    onNoteReleased(note);
                }
            }
        };

        document.addEventListener("keyup", handleKey);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("keyup", handleKey);
            document.removeEventListener("keydown", handleKey);
        };
    }, [pressedKeys]);

    return (
        <div className={ classes.keyboard }>
            { notes.map(note => 
                <div className={`${classes.note} ${note.isBlackNote ? classes.blackNote : ""} ${pressedKeys.includes(note) ? classes.pressed : ""}`} 
                    key={ note.freq }
                    onMouseDown={ () => onNotePressed(note) }
                    onMouseUp={ () => onNoteReleased(note) }
                    onTouchStart={ (e) => { onNotePressed(note); e.preventDefault(); } }
                    onTouchEnd={ (e) => { onNoteReleased(note); e.preventDefault(); } }
                >
                    <div className={classes.noteContent}>
                        { note.key && <small className={ classes.keyIndicator }>({ note.key })</small> }
                        <span>{ note.name }<small className={ classes.notePos }>{ note.pos }</small></span>
                    </div>
                </div>
            ) }
        </div>
    )
}

export const Keyboard = withStyles(styles)(_Keyboard)

interface Props extends WithStyles<typeof styles> {
    pressedKeys: Note[];
    onNotePressed(note: Note): void;
    onNoteReleased(note: Note): void;
}

export interface Note {
    name: string;
    pos: number;
    freq: number;
    isBlackNote: boolean
    key: string | null;
}