import { makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles({
    container: {
        display: "grid",
        margin: "32px 0px",
        gridTemplateAreas: "'method url' 'header header' 'body body'",
        gridTemplateColumns: "1fr 3fr",
        "& > *": {
            border: "solid 1px grey",
            margin: 0,
            padding: 16
        },
        "& dt": {
            fontWeight: 500
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
    return (
        <ContentSlide Title='Request Template' context={context} Content={
            <div className={ classes.container }>
                <dl className={ classes.method }>
                    <dt>Method</dt>
                    <dd></dd>
                </dl>
                <dl className={ classes.url}>
                    <dt>URL</dt>
                    <dd></dd>
                </dl>
                <dl className={ classes.headers}>
                    <dt>Headers</dt>
                    <dd></dd>
                </dl>
                <dl className={ classes.body }>
                    <dt>Body</dt>
                    <dd></dd>
                </dl>
            </div>
        } />
    );
}

// TODO - This is helpful. Make this a shared comp when it's not 1AM
export function BadRequest({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title='What are you doing?!' context={context} Content={
            <div className={ classes.container }>
                <dl className={ classes.method }>
                    <dt>Method</dt>
                    <dd>Comment</dd>
                </dl>
                <dl className={ classes.url}>
                    <dt>URL</dt>
                    <dd><a href="https://www.facebook.com">www.facebook.com</a></dd>
                </dl>
                <dl className={ classes.headers}>
                    <dt>Headers</dt>
                    <dd>
                        <ul>
                            <li>Comment-Text: Fake news!</li>
                            <li>Post-Id: 1234</li>
                        </ul>
                    </dd>
                </dl>
                <dl className={ classes.body }>
                    <dt>Body</dt>
                    <dd>&lt;Empty&gt;</dd>
                </dl>
            </div>
        } />
    );
}

export function OkayRequest({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title='Better...' context={context} Content={
            <div className={ classes.container }>
                <dl className={ classes.method }>
                    <dt>Method</dt>
                    <dd>POST</dd>
                </dl>
                <dl className={ classes.url}>
                    <dt>URL</dt>
                    <dd><a href="https://www.facebook.com/create-comment">www.facebook.com/create-comment</a></dd>
                </dl>
                <dl className={ classes.headers}>
                    <dt>Headers</dt>
                    <dd>
                        <dt>&lt;Empty&gt;</dt>
                    </dd>
                </dl>
                <dl className={ classes.body }>
                    <dt>Body</dt>
                    <dd>
                        <code>
                            { JSON.stringify({ postId: "1234", commentText: "I respectfully disagree" }) }
                        </code>
                    </dd>
                </dl>
            </div>
        } />
    );
}

export function RestRequest({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title='REST Request' context={context} Content={
            <div className={ classes.container }>
                <dl className={ classes.method }>
                    <dt>Method</dt>
                    <dd>POST</dd>
                </dl>
                <dl className={ classes.url}>
                    <dt>URL</dt>
                    <dd><a href="https://www.facebook.com/posts/1234/comment">https://www.facebook.com/posts/1234/comment</a></dd>
                </dl>
                <dl className={ classes.headers}>
                    <dt>Headers</dt>
                    <dd>
                        <dt>Content Type, Accept, Authorization, Encoding, etc.</dt>
                    </dd>
                </dl>
                <dl className={ classes.body }>
                    <dt>Body</dt>
                    <dd>
                        <code>
                            { JSON.stringify({ commentText: "Here are a couple quotes from sources you respect that seem to argue otherwise" }) }
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