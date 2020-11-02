import { Link as MaterialLink } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useMarkdownLabStyles } from "../../shared/lab";
import writeup from "./final-project.md";

interface Props {
    baseUrl: string;
}

export function FinalProject({ baseUrl }: Props) {
    const classes = useMarkdownLabStyles();
    return (
        <div className={ classes.container }>
            <MaterialLink component={ Link } to={`${ baseUrl }`}>Back to Course</MaterialLink>
            <div dangerouslySetInnerHTML={{ __html: writeup }} />
        </div>
        
    )
}