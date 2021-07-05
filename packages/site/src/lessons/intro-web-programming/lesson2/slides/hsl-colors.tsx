import { createStyles, makeStyles } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(createStyles({
    colorContainer: {
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    colorBlock: {
        borderRadius: 8,
        fontSize: "2.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 4px #ccc",
        height: 480,
        width: 720,
        "& input": {
            marginLeft: 16,
            fontSize: "2rem"
        }
    }
}))

function toColor(h: number, s: number, l: number) {
    return `hsl(${h}, ${s}%, ${l}%)`
}

export function HslColors({ context }: Props) {

    const classes = useStyles();
    const [color, setColor] = useState({
        h: 1,
        s: 50,
        l: 50
    });

    const colorStyle = toColor(color.h, color.s, color.l);
    const inverseColor = (color.l > 50) ? "black" : "white"

    const onChange = (c: keyof typeof color) => (e: ChangeEvent<HTMLInputElement>) => {
        const newColor = parseInt(e.currentTarget.value, 10);
        setColor(old => ({ ...old, [c]: newColor }));
    }

    return (
        <ContentSlide Title="HSL Colors" context={ context } Content={
            <div className={ classes.colorContainer}>
                <div style={{ backgroundColor: colorStyle, color: inverseColor }} className={classes.colorBlock}>
                    { colorStyle }
                    <label>Hue<input type="number" min="0" max="360" value={color.h} onChange={ onChange("h") } /></label>
                    <label>Saturation<input type="number" min="0" max="100" value={color.s} onChange={ onChange("s") } /></label>
                    <label>Luminance<input type="number" min="0" max="100" value={color.l} onChange={ onChange("l") } /></label>
                </div>
            </div>
        }/>
    )
}

interface Props {
    context: PresentationContext
}