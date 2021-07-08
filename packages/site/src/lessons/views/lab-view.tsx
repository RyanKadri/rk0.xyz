import Head from "next/head";
import React from "react";
import { useMarkdownLabStyles } from "../../lessons/shared/lab";

interface Props {
    children: any[];
    description: string;
    title?: string;
}
export function LabLayout({ children, title, description }: Props) {
    const labStyles = useMarkdownLabStyles();
    const derivedTitle = title 
        ?? children.find(child => child.props.originalType === "h1")?.props?.children 
        ?? "Ryan Kadri";

    return (
        <main className={ labStyles.container }>
            <Head>
                <title>{derivedTitle}</title>
                { description && (
                    <meta name="description" key="description" content={ description } />
                )}
            </Head>
            { children }
        </main>
    )
}