import { config } from '@fortawesome/fontawesome-svg-core';
import { CssBaseline, makeStyles, MuiThemeProvider, Theme } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { CodeBlockMdxWrapper } from '../packages/presenter-core/src/slides/components/code-block-mdx-wrapper';
import { InlineCode } from '../packages/presenter-core/src/slides/components/inline-code-mdx';
import { GAWrapper } from "../packages/site/src/analytics";
import { RootNav } from "../packages/site/src/root/top-nav";
import { lightTheme } from "../packages/site/src/theme";
config.autoAddCss = false

const useStyles = makeStyles((_: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    }
}))

function SiteViewport({ Component, pageProps }: AppProps) {

    const classes = useStyles();
    const mdxComponents = {
        code: CodeBlockMdxWrapper,
        inlineCode: InlineCode
    }

    return (
        <GAWrapper>
            <MDXProvider components={ mdxComponents }>
                <MuiThemeProvider theme={ lightTheme }>
                    <CssBaseline />
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                        <title>Ryan Kadri</title>
                        <meta name="description" key="description" content="A collection of programming classes taught at Temple University by Ryan Kadri. Learn Web Programming and other topics with the help of slides, labs, videos, and interactive examples" />
                        <link rel="icon" href="/favicon.png" />
                    </Head>
                    <div className={classes.container}>
                        <RootNav />
                        <Component {...pageProps} />
                    </div>
                </MuiThemeProvider>
            </MDXProvider>
        </GAWrapper>
    )
}

export default SiteViewport;
