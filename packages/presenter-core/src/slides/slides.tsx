import { ReactElement, ReactNode, useContext } from "react";
import { PresentationContext } from "../services/types";
import { SyntaxHighlightedBlock } from "./components/code-block";
import { NestedListInfo } from "./components/info-list";
import { CodeSlideOptions } from "./generate-slide";
import { IThemeContext, ThemeContext } from "./themes/theme-context";

function _Slide<P>(themeCb: (theme: IThemeContext) => React.ComponentType<P>) {
    return function(props: P) {
        const themeContext = useContext(ThemeContext);
        const Slide = themeCb(themeContext);
        return (
            <Slide { ...props }></Slide>
        )
    }
}

export interface TitleSlideProps {
    Title: string | ReactElement;
    Subtitle: string | ReactElement;
    context: PresentationContext
}

export const TitleSlide = _Slide(theme => theme.slides.TitleSlide);

export interface CenterMessageSlideProps {
    context: PresentationContext;
    Message: string | ReactElement
}

export const CenterMessageSlide = _Slide(theme => theme.slides.CenterMessageSlide);

export interface CodeSlideProps {
    context: PresentationContext;
    Title: string | ReactElement;
    bullets: (string | NestedListInfo | ReactElement)[];
    code: SyntaxHighlightedBlock;
    options?: CodeSlideOptions;
    children?: ReactNode;
}

export const CodeSlide = _Slide(theme => theme.slides.CodeSlide);

export interface ContentSlideProps {
    Title: string | ReactElement;
    Content: (string | NestedListInfo | ReactElement)[] | ReactElement;
    context: PresentationContext;
    classes?: {
        viewport?: string;
    }
    options?: ContentSlideOptions;
}

export interface ContentSlideOptions {
    useOrderedLists?: boolean;
}

export const ContentSlide = _Slide(theme => theme.slides.ContentSlide);

export interface EmbedSlideProps {
    Content: ReactElement;
    context: PresentationContext;
}

export const EmbedSlide = _Slide(theme => theme.slides.EmbedSlide);

export interface MediaAssistSlideProps {
    Title: string | ReactElement;
    info: (string | NestedListInfo | ReactElement)[];
    Media: ReactElement;
    context: PresentationContext
}

export const MediaAssistSlide = _Slide(theme => theme.slides.MediaAssistSlide)

export interface MediaSlideProps {
    context: PresentationContext;
    Title?: ReactElement | string;
    Media: ReactElement;
    Credit?: ReactElement | string;
}

export const MediaSlide = _Slide(theme => theme.slides.MediaSlide)

export interface DefinitionSlideProps {
    context: PresentationContext;
    Term: ReactNode;
    Definition: ReactNode;
}

export const DefinitionSlide = _Slide(theme => theme.slides.DefinitionSlide)