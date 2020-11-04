import React from "react";
import { useMarkdownLabStyles } from "../../../shared/lab";
import writeup from "./pokedex.md";

export function PokedexLab() {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}