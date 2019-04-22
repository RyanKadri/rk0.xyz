import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Tone from "tone";
import { useAppBar } from "../common/use-app-bar";
import { Keyboard, Note } from "./keyboard";

const styles = createStyles({
    container: {
        padding: 16
    },
    
})

const _MusicPage = ({ classes }: Props) => {
    useAppBar("Music");
    
    const audio = useRef<AudioInfo | null>(null);

    useEffect(() => {
        document.addEventListener("click", () => Tone.start());
        audio.current = {
            synth: new Tone.Synth().toMaster()
        }
    }, []);

    const [heldKeys, setHeldKeys] = useState<Note[]>([]);

    const onNotePressed = (note: Note) => {
            audio.current!.synth.triggerAttackRelease(note.freq, "8n")
            setHeldKeys(keys => Array.from(new Set([ ...keys, note])));
    }

    const onNoteReleased = (note: Note) => {
        setHeldKeys(old => old.filter(key => key.freq !== note.freq))
    }

    return (
        <div className={ classes.container }>
            <Keyboard onNotePressed={ onNotePressed } onNoteReleased={ onNoteReleased } pressedKeys={ heldKeys } />
        </div>
    )
}

export const MusicPage = withStyles(styles)(_MusicPage)

interface Props extends WithStyles<typeof styles> {

}

interface AudioInfo {
    synth: Tone.Synth
}