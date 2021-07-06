import { makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles({
    container: {
        display: "grid",
        margin: "32px 0px",
        gridTemplateAreas: "'method url' 'header header' 'body body'",
        gridTemplateColumns: "1fr 4fr",
        gridTemplateRows: "70px 175px 420px",
        fontSize: "0.7rem",
        "& > *": {
            border: "solid 1px grey",
            margin: 0,
            padding: 16,
            display: "flex",
            flexDirection: "row"
        },
        "& dt": {
            fontWeight: 500
        },
        "& table, & td, & th": {
            border: "solid 2px black",
            borderCollapse: "collapse",
            padding: 4
        },
        "& pre": {
            margin: 0
        }
    },
    method: {
        gridArea: "method"
    },
    url: {
        gridArea: "url"
    },
    headers: {
        gridArea: "header"
    },
    body: {
        gridArea: "body"
    }
});

export function RequestTemplate({ context }: Props) {
    const classes = useStyles();
    const bodyExample = `{
    "title": "My Note",
    "note": "This is a note",
    "tags": ["boring", "note"]
}`;
    return (
        <ContentSlide Title='HTTP Request' context={context} Content={
            <div className={ classes.container }>
                <dl className={ classes.method }>
                    <dt>Method</dt>
                    <dd>POST</dd>
                </dl>
                <dl className={ classes.url}>
                    <dt>URL</dt>
                    <dd>
                        <a href="https://spy-notes-api.rk0.xyz/users/3ff1cbc9-e6d3-496b-a696-44c0a2cd9fe1/notes">
                            https://spy-notes-api.rk0.xyz/users/3ff1cbc9-e6d3-496b-a696-44c0a2cd9fe1/notes
                        </a>
                    </dd>
                </dl>
                <dl className={ classes.headers}>
                    <dt>Headers</dt>
                    <dd>
                        <table>
                            <thead><th>Header</th><th>Value</th></thead>
                            <tbody>
                                <tr>
                                    <td>Content-Type</td><td>application/json</td>
                                </tr>
                                <tr>
                                    <td>Accept-Encoding</td><td>gzip, deflate, br</td>
                                </tr>
                            </tbody>
                        </table>
                    </dd>
                </dl>
                <dl className={ classes.body }>
                    <dt>Body</dt>
                    <dd>
                        <code>
                            <pre>{ bodyExample }</pre>
                        </code>
                    </dd>
                </dl>
            </div>
        } />
    );
}

interface Props {
    context: PresentationContext
}