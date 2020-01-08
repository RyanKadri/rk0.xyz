import { createStyles, Link as MaterialLink, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const links = [
    { label: "CSS Selector Target Practice", url: "https://flukeout.github.io/" },
    { label: "CSS Selector Cheat Sheet", url: "https://adam-marsden.co.uk/css-cheat-sheet" },
    { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
    { label: "Palette Builder", url: "https://material-ui.com/customization/color/#color-tool" },
    { label: "Media Query Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" }
]

const useStyles = makeStyles(createStyles({
    referenceList: {
        fontSize: "2rem",
        "& li": {
            marginBottom: 16
        }
    }
}))
export function References({ context }: Props) {

    const classes = useStyles();

    return (
        <ContentSlide Title="References" context={ context } Content={
            <ul className={ classes.referenceList }>{
                links.map(link => (
                    <li key={link.url}>
                        <Typography className={ classes.referenceList }>{ link.label } </Typography> 
                        <MaterialLink href={link.url} target="_blank">{ link.url }</MaterialLink>
                    </li>
                ))
            }</ul>
        }/>
    )
}

interface Props {
    context: PresentationContext
}