
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(theme => createStyles({
    contentCell: {
        border: `solid 4px ${theme.palette.text.secondary}`,
        width: "45%",
        height: "350px",
        verticalAlign: "top",
        padding: 16
    },
    header: {
        textAlign: "center"
    }
}))

export function ActiveWaiting({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Types of Tasks" context={context} Content={
            <table>
                <thead>
                    <tr>
                        <td></td><td className={ classes.header }>Fast</td>
                        <td className={ classes.header }>Slow</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Focus Needed</td>
                        <td className={ classes.contentCell }>
                            <strong>Synchronous</strong>
                            <ul>
                                <li>Human: Writing in a notebook</li>
                                <li>Computer: Simple Arithmetic</li>
                            </ul>
                        </td>
                        <td className={ classes.contentCell }>
                            <strong>Synchronous</strong>
                            <ul>
                                <li>Human: Sorting a deck of cards</li>
                                <li>Computer: Complex calculations</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Involve Waiting</td>
                        <td className={ classes.contentCell }>
                            <strong>Synchronous</strong>
                            <ul>
                                <li>Human: Typing on a keyboard</li>
                                <li>Computer: Reading from memory</li>
                                <li>JavaScript: Updating a web page</li>
                            </ul>
                        </td>
                        <td className={ classes.contentCell }>
                            <strong>Asynchronous</strong>
                            <ul>
                                <li>Human: Doing laundry</li>
                                <li>Computer: Making a server request</li>
                                <li>Computer: Waiting on a timer</li>
                            </ul>
                        </td>    
                    </tr>                    
                </tbody>
            </table>
        } />
    );
}

interface Props {
    context: PresentationContext
}