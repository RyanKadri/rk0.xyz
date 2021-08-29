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
        fontSize: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 4px #ccc",
        height: 480,
        width: 720,
        "& input": {
            marginLeft: 16,
            fontSize: "1rem"
        }
    }
}))

function toColor(red: number, green: number, blue: number) {
    return `rgb(${red}, ${green}, ${blue})`
}

export function RgbaColors({ context }: Props) {

    const classes = useStyles();
    const [color, setColor] = useState({
        red: 120,
        green: 120,
        blue: 120
    });

    const colorStyle = toColor(color.red, color.green, color.blue);
    const inverseColor = (color.red + color.green + color.blue > 128 * 3) ? "black" : "white"
    const onChange = (c: keyof typeof color) => (e: ChangeEvent<HTMLInputElement>) => {
        const newColor = parseInt(e.currentTarget.value, 10);
        setColor(old => ({ ...old, [c]: newColor }));
    }

    return (
        <ContentSlide Title="RGB Colors" context={ context } Content={
            <div className={ classes.colorContainer}>
                <div style={{ backgroundColor: colorStyle, color: inverseColor }} className={classes.colorBlock}>
                    { colorStyle }
                    <label>Red<input type="number" min="0" max="255" value={color.red} onChange={ onChange("red") } /></label>
                    <label>Green<input type="number" min="0" max="255" value={color.green} onChange={ onChange("green") } /></label>
                    <label>Blue<input type="number" min="0" max="255" value={color.blue} onChange={ onChange("blue") } /></label>
                </div>
            </div>
        }/>
    )
}

interface Props {
    context: PresentationContext
}