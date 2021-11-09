import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";

const useStyles = makeStyles(theme => createStyles({
    container: {
        display: "grid",
        margin: "32px 0px",
        gridTemplateAreas: "'status' 'header' 'body'",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "70px 175px 420px",
        fontSize: "0.7rem",
        "& > dl": {
            border: `solid 4px ${ theme.palette.text.secondary }`,
            margin: 0,
            padding: 16,
        },
        "& > dl:not(:last-of-type)": {
            borderBottom: `none`,
        },
        "& dt": {
            fontWeight: 500
        },
        "& table, & td, & th": {
            border: `solid 2px ${ theme.palette.text.secondary }`,
            borderCollapse: "collapse",
            padding: 8
        },
        "& pre": {
            margin: 0
        }
    },
    statusCode: {
        gridArea: "status",
        display: "flex",
        flexDirection: "row"
    },
    headers: {
        gridArea: "header",
        display: "flex",
        flexDirection: "row"
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

interface Header {
    name: string;
    value: string;
}

interface Props {
    statusCode: string;
    headers: Header[];
    body: SyntaxHighlightedBlock
}

export function ResponseVisualizer({ statusCode, headers, body }: Props) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <dl className={ classes.statusCode }>
                <dt>Status Code</dt>
                <dd>{ statusCode }</dd>
            </dl>
            <dl className={ classes.headers}>
                <dt>Headers</dt>
                <dd>
                    <table>
                        <tbody>
                            { headers.map(header => (
                                <tr key={ header.name + header.value }>
                                    <td>{ header.name }</td>
                                    <td>{ header.value }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </dd>
            </dl>
            <dl className={ classes.body }>
                <dt>Body</dt>
                <dd>
                    <CodeBlock code={ body } />
                </dd>
            </dl>
        </div>
    );
}