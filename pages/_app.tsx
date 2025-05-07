import { CacheProvider } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { MDXProvider } from "@mdx-js/react";
import { Components } from "@mdx-js/react/lib";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CodeBlockMdxWrapper } from "../packages/presenter-core/src/slides/components/code-block-mdx-wrapper";
import { InlineCode } from "../packages/presenter-core/src/slides/components/inline-code-mdx";
import { GAWrapper } from "../packages/site/src/analytics";
import { UserContext, isProfessor } from "../packages/site/src/common/admin";
import { createEmotionCache } from "../packages/site/src/common/createEmotionCache";
import { useClientSideValue } from "../packages/site/src/common/functional-utils";
import { RootNav } from "../packages/site/src/root/top-nav";
import { lightTheme } from "../packages/site/src/theme";
config.autoAddCss = false;

const clientSideEmotionCache = createEmotionCache();

export default function SiteViewport({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache }) {
  const mdxComponents: Components = {
    code: props => <CodeBlockMdxWrapper className={props.className}>{props.children as string}</CodeBlockMdxWrapper>,
    inlineCode: props => <InlineCode>{props.children}</InlineCode>,
  };

  const userSettings = {
    isProfessor: useClientSideValue(isProfessor, false),
  };

  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerHeight === screen.height) {
        console.log("full screen!")
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    })
  }, [])

  return (
    <GAWrapper>
      <MDXProvider components={mdxComponents}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <UserContext.Provider value={userSettings}>
              <CssBaseline />
              <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Ryan Kadri</title>
                <meta
                  name="description"
                  key="description"
                  content="A collection of programming classes taught at Temple University by Ryan Kadri. Learn Web Programming and other topics with the help of slides, labs, videos, and interactive examples"
                />
                <link rel="icon" href="/favicon.png" />
              </Head>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", "--nav-height": "0px" }}>
                <RootNav fullscreen={fullscreen} />
                <Component {...pageProps} />
              </div>
            </UserContext.Provider>
          </ThemeProvider>
        </CacheProvider>
      </MDXProvider>
    </GAWrapper>
  );
}
