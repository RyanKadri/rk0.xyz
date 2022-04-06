import { Typography } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

export function Consistency({ context }: { context: PresentationContext }) {
  return (
    <ContentSlide
      Title="A fundamental rule of style"
      context={context}
      Content={
        <>
          <Typography style={{ fontFamily: "serif", fontSize: 64, marginTop: 128 }}>
            Consistency is key
          </Typography>
          <style
            dangerouslySetInnerHTML={{
              __html: `
nav { 
    background-color: green;
    height: 80px !important;
}
a {
    color: beige !important;
    font-family: monospace !important;
    font-weight: 900 !important;
}
nav a:first-of-type {
    font-size: 26px !important;
}
main > div:nth-of-type(2) {
    background-color: #225;
}
`,
            }}
          />
        </>
      }
    />
  );
}
