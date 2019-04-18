import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
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

    const onNotePressed = (note: Note) => {
        audio.current!.synth.triggerAttackRelease("C4", "8n")
    }

    const onNoteReleased = (_: Note) => {
        // audio.current!.gainNode.gain.exponentialRampToValueAtTime(0.01, audio.current!.context.currentTime + 0.01);
        // setTimeout(() => {
        //     audio.current!.context.suspend();
        // }, 100)
    }

    return (
        <div className={ classes.container }>
            <Keyboard onNotePressed={ onNotePressed } onNoteReleased={ onNoteReleased } />
        </div>
    )
}

export const MusicPage = withStyles(styles)(_MusicPage)

interface Props extends WithStyles<typeof styles> {

}

interface AudioInfo {
    synth: Synth
}