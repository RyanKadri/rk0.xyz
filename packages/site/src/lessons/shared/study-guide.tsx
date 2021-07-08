import { Link as MaterialLink } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { useMarkdownLabStyles } from "./lab";

interface Props {
    children: any[];
}
export function StudyGuide({ children }: Props) {
    const classes = useMarkdownLabStyles();
    return (
        <main className={ classes.container }>
            <Link href={ "../" } passHref>
                <MaterialLink>Back to Course</MaterialLink>
            </Link>
            { children }
        </main>
    )
}