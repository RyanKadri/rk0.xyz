
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    major: {
        color: "blue"
    },
    minor: {
        color: "green"
    },
    patch: {
        color: "red"
    },
    versionContainer: {
        fontSize: "1.5rem",
        marginTop: 32,
    },
    version: {
        fontFamily: "monospace"
    },
    partList: {
        fontSize: "1.25rem",
        margin: 0,
        padding: 0,
        marginTop: 32,
        "& > li": {
            listStyle: "none",
            marginTop: 16
        }
    }
}))

export function SemanticVersioning({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Semantic Versioning" context={context} Content={
            <>
                <div className={ classes.versionContainer }>
                    Version: <span className={ classes.version }>    
                        <span className={ classes.major }>7</span>
                        .<span className={ classes.minor }>15</span>
                        .<span className={ classes.patch }>20</span>
                    </span>
                </div>
                <ul className={ classes.partList }>
                    <li>
                        <span className={ classes.major }>Major: </span> 
                        Gets incremented on breaking changes
                        <ul>
                            <li>Read the documentation before updating</li>
                        </ul>
                    </li>
                    <li>
                        <span className={ classes.minor }>Minor: </span> 
                        Gets incremented for new features
                        <ul>
                            <li>Update at some point but test your code</li>
                        </ul>
                    </li>
                    <li>
                        <span className={ classes.patch }>Patch: </span> 
                        Gets incremented for bug and security fixes
                        <ul>
                            <li>Should be safe (but test your code)</li>
                        </ul>
                    </li>
                </ul>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}