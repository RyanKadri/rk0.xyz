import { Link as MaterialLink } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { useMarkdownLabStyles } from "./lab";

interface Props {
    content: string;
    baseUrl: string
}

export function StudyGuide({ content, baseUrl }: Props) {
    const classes = useMarkdownLabStyles();
    return (
        <main className={ classes.container }>
            <Link href={ baseUrl } passHref>
                <MaterialLink>Back to Course</MaterialLink>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </main>
    )
}