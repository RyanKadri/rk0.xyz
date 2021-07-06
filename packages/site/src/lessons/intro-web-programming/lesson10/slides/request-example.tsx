import { createStyles, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(theme => createStyles({
    container: {
        display: "grid",
        margin: "32px 0px",
        gridTemplateAreas: "'method url' 'header header' 'body body'",
        gridTemplateColumns: "1fr 4fr",
        gridTemplateRows: "70px 175px 420px",
        fontSize: "0.7rem",
        "& > *": {
            border: `solid 1px ${ theme.palette.text.secondary }`,
            margin: 0,
            padding: 16,
            display: "flex",
            flexDirection: "row"
        },
        "& dt": {
            fontWeight: 500
        },
        "& table, & td, & th": {
            border: `solid 2px ${theme.palette.text.secondary}`,
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
        gridArea: "body",
        display: "block",
        "& dd": {
            margin: 0,
            marginTop: 16
        }
    }
}));

export function RequestTemplate({ context }: Props) {
    const classes = useStyles();
    const bodyExample = synJS`
{
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
                        <Link href="https://spy-notes-api.rk0.xyz/users/3ff1cbc9-e6d3-496b-a696-44c0a2cd9fe1/notes">
                            https://spy-notes-api.rk0.xyz/users/3ff1cbc9-e6d3-496b-a696-44c0a2cd9fe1/notes
                        </Link>
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
                        <CodeBlock code={ bodyExample } />
                    </dd>
                </dl>
            </div>
        } />
    );
}

interface Props {
    context: PresentationContext
}