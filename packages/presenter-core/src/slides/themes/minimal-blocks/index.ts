import { darkTheme, lightTheme } from "../../../../../site/src/theme";
import { CenterMessageSlide } from "../blank/center-message-slide";
import { DefinitionSlide } from "../blank/definition-slide";
import { FullSlide } from "../blank/embed-slide";
import { MediaAssistSlide } from "../blank/media-assist-slide";
import { MediaSlide } from "../blank/media-slide";
import { IThemeContext } from "../theme-context";
import { CodeSlide } from "./code-slide";
import { ContentSlide } from "./content-slide";
import { TitleSlide } from "./title-slide";

export const minimalBlocksTheme: IThemeContext = {
    slides: {
        CenterMessageSlide: CenterMessageSlide,
        CodeSlide: CodeSlide,
        ContentSlide: ContentSlide,
        DefinitionSlide: DefinitionSlide,
        EmbedSlide: FullSlide,
        MediaAssistSlide: MediaAssistSlide,
        MediaSlide: MediaSlide,
        TitleSlide: TitleSlide,
    },
    theme: lightTheme
}

export const minimalBlocksDarkTheme: IThemeContext = {
    slides: {
        CenterMessageSlide: CenterMessageSlide,
        CodeSlide: CodeSlide,
        ContentSlide: ContentSlide,
        DefinitionSlide: DefinitionSlide,
        EmbedSlide: FullSlide,
        MediaAssistSlide: MediaAssistSlide,
        MediaSlide: MediaSlide,
        TitleSlide: TitleSlide,
    },
    theme: darkTheme
}