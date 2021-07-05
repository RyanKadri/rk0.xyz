import { createMuiTheme } from "@material-ui/core";
import { cyan, purple } from "@material-ui/core/colors";
import { defaultTheme } from "../../../../../site/src/theme";
import type { IThemeContext } from "../theme-context";
import { CenterMessageSlide } from "./center-message-slide";
import { CodeSlide } from "./code-slide";
import { ContentSlide } from "./content-slide";
import { DefinitionSlide } from "./definition-slide";
import { FullSlide } from "./embed-slide";
import { MediaAssistSlide } from "./media-assist-slide";
import { MediaSlide } from "./media-slide";
import { TitleSlide } from "./title-slide";

export const blankTheme: IThemeContext = {
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
    theme: createMuiTheme({
        ...defaultTheme,
        palette: {
            ...defaultTheme.palette,
            primary: cyan,
            secondary: purple,
        }
    })
}