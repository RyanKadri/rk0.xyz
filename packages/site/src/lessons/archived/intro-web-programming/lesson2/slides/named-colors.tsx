import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const colors = [
    "red",
    "blue",
    "green",
    "aliceblue",
    "tomato",
    "rebeccapurple"
]

const useStyles = makeStyles(createStyles({
    colorContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gridGap: 16,
        height: "80%"
    },
    colorBlock: {
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 4px #ccc",
        fontSize: "2.5rem"
    }
}))
export function NamedColors({ context }: Props) {

    const classes = useStyles();

    return (
        <ContentSlide Title="Named Colors" context={ context } Content={
            <div className={ classes.colorContainer}>
                { colors.map(color => (
                    <div key={color} style={{ backgroundColor: color }} className={classes.colorBlock}>
                        { color }
                    </div>
                )) }
            </div>
        }/>
    )
}

interface Props {
    context: PresentationContext
}