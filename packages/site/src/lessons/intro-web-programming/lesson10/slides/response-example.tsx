import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import { synJS } from "../../../../common/highlighting";

const useStyles = makeStyles(theme => createStyles({
    container: {
        display: "grid",
        margin: "32px 0px",
        gridTemplateAreas: "'status' 'header' 'body'",
        gridTemplateColumns: "1fr",
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
            border: `solid 2px ${ theme.palette.text.secondary }`,
            borderCollapse: "collapse",
            padding: 4
        },
        "& pre": {
            margin: 0
        }
    },
    statusCode: {
        gridArea: "status"
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

export function ResponseTemplate({ context }: Props) {
    const classes = useStyles();
    const responseBody = synJS`
{
    "title": "My Note",
    "note": "This is a note",
    "tags": ["boring", "note"],
    "noteId": "da45f426-3e4e-4faf-95c5-ec02490bbe7d",
    "created": 1605037559804
}`;

    return (
        <ContentSlide Title='HTTP Response' context={context} Content={
            <div className={ classes.container }>
                <dl className={ classes.statusCode }>
                    <dt>Status Code</dt>
                    <dd>200 (OK)</dd>
                </dl>
                <dl className={ classes.headers}>
                    <dt>Headers</dt>
                    <dd>
                        <table>
                            <thead>
                                <tr>
                                    <th>Header</th><th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Content-Type</td><td>application/json; charset=utf-8</td>
                                </tr>
                                <tr>
                                    <td>Access-Control-Allow-Origin</td><td>*</td>
                                </tr>
                            </tbody>
                        </table>
                    </dd>
                </dl>
                <dl className={ classes.body }>
                    <dt>Body</dt>
                    <dd>
                        <CodeBlock code={ responseBody } />
                    </dd>
                </dl>
            </div>
        } />
    );
}

interface Props {
    context: PresentationContext
}