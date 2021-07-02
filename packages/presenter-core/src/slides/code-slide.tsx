import { makeStyles } from "@material-ui/core";
import React, { ReactElement, ReactNode } from "react";
import { PresentationContext } from "../services/types";
import { CodeBlock } from "../slide-components/code-block";
import { InfoList, NestedListInfo } from "../slide-components/info-list";
import { ContentSlide } from "./content-slide";
import { CodeSlideOptions, SlideCode } from "./generate-slide";

const useStyles = makeStyles({
    contentContainer: {
        display: "flex",
        flexDirection: "column",
    },
    codeBlock: {
        overflow: "auto",
        flexShrink: 1
    }
})


interface Props {
    context: PresentationContext;
    Title: string | ReactElement;
    bullets: (string | NestedListInfo | ReactElement)[];
    codeBlock: SlideCode;
    options?: CodeSlideOptions;
    children?: ReactNode;
}
export function CodeSlide({ context, Title, bullets, codeBlock, options = {}, children }: Props) {
    const { codeFirst = false } = options;
    
    const classes = useStyles();
    return (
        <ContentSlide Title={ Title } context={ context } Content={ 
            <div className={ classes.contentContainer }>{
            codeFirst
                ? <>
                    <CodeBlock code={ codeBlock.code } className={ classes.codeBlock } />
                    <InfoList items={ bullets } />
                    { children }
                  </>
                : <>
                    <InfoList items={ bullets } />
                    <CodeBlock code={ codeBlock.code } className={ classes.codeBlock } />
                    { children }
                  </>
            }</div>
         } />
    )
}
