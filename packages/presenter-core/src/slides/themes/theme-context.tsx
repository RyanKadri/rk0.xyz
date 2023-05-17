import { Theme } from "@mui/material";
import React, { createContext } from "react";
import {
  CenterMessageSlideProps,
  CodeSlideProps,
  ContentSlideProps,
  DefinitionSlideProps,
  EmbedSlideProps,
  MediaAssistSlideProps,
  MediaSlideProps,
  TitleSlideProps,
} from "../slides";
import { blankTheme } from "./blank";

export interface IThemeContext {
  slides: Slides;
  theme: Theme;
}

interface Slides {
  CenterMessageSlide: React.ComponentType<CenterMessageSlideProps>;
  CodeSlide: React.ComponentType<CodeSlideProps>;
  ContentSlide: React.ComponentType<ContentSlideProps>;
  DefinitionSlide: React.ComponentType<DefinitionSlideProps>;
  EmbedSlide: React.ComponentType<EmbedSlideProps>;
  MediaAssistSlide: React.ComponentType<MediaAssistSlideProps>;
  MediaSlide: React.ComponentType<MediaSlideProps>;
  TitleSlide: React.ComponentType<TitleSlideProps>;
}

export const ThemeContext = createContext<IThemeContext>(blankTheme);
