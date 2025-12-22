import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { config } from "@fortawesome/fontawesome-svg-core";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GAWrapper } from "../packages/site/src/analytics";
import { UserContext, isProfessor } from "../packages/site/src/common/admin";
import { createEmotionCache } from "../packages/site/src/common/createEmotionCache";
import { useClientSideValue } from "../packages/site/src/common/functional-utils";
import { RootNav } from "../packages/site/src/root/top-nav";
import { lightTheme } from "../packages/site/src/theme";
config.autoAddCss = false;

const clientSideEmotionCache = createEmotionCache();
const AppContainer = styled("div")({
  display: "flex", 
  flexDirection: "column", 
  minHeight: "100vh", 
  "--nav-height": "0px"
})

export default function SiteViewport({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache }) {
  const userSettings = {
    isProfessor: useClientSideValue(isProfessor, false),
  };

  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerHeight === screen.height) {
        console.log("full screen!");
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    });
  }, []);

  return (
    <GAWrapper>
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
              <AppContainer>
                <RootNav fullscreen={fullscreen} />
                <Component {...pageProps} />
              </AppContainer>
            </UserContext.Provider>
          </ThemeProvider>
        </CacheProvider>
    </GAWrapper>
  );
}
