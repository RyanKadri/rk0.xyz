import { ReactElement, ReactNode } from "react";
import { PresentationContext } from "../services/types";
import { CodeBlockOptions, SyntaxHighlightedBlock } from "./components/code-block";
import { NestedListInfo } from "./components/info-list";
import {
  CenterMessageSlide,
  CodeSlide,
  ContentSlide,
  ContentSlideOptions,
  DefinitionSlide,
  EmbedSlide,
  MediaAssistSlide,
  MediaSlide,
  TitleSlide,
} from "./slides";

export function generateContentSlide(
  title: string,
  points: (string | NestedListInfo | ReactElement)[],
  options?: ContentSlideOptions,
) {
  return function ({ context }: { context: PresentationContext }) {
    return <ContentSlide Title={title} Content={points} context={context} options={options} />;
  };
}

export function generateMessageSlide(message: string | ReactElement) {
  return function ({ context }: { context: PresentationContext }) {
    return <CenterMessageSlide Message={message} context={context} />;
  };
}

export function generateTitleSlide(title: string, subtitle: string) {
  return function ({ context }: { context: PresentationContext }) {
    return <TitleSlide Title={title} Subtitle={subtitle} context={context} />;
  };
}

export function generateFullSlide(content: ReactElement) {
  return function ({ context }: { context: PresentationContext }) {
    return <EmbedSlide context={context} Content={content} />;
  };
}

export function generateMediaSlide(media: ReactElement, credit?: ReactElement | string, title?: ReactElement | string) {
  return function ({ context }: { context: PresentationContext }) {
    return <MediaSlide context={context} Media={media} Title={title} Credit={credit} />;
  };
}

interface SlideInfo extends CodeSlideOptions {
  code: SyntaxHighlightedBlock;
}

export interface CodeSlideOptions {
  codeBlock?: CodeBlockOptions;
  codeFirst?: boolean;
}

export function generateCodeSlide(
  title: string,
  bullets: (string | NestedListInfo | ReactElement)[],
  codeBlock: SlideInfo,
) {
  const { code, ...options } = codeBlock;
  return function ({ context }: { context: PresentationContext }) {
    return <CodeSlide context={context} Title={title} bullets={bullets} code={codeBlock.code} options={options} />;
  };
}

export function generateDefinitionSlide(term: ReactNode, definition: ReactNode) {
  return function ({ context }: { context: PresentationContext }) {
    return <DefinitionSlide context={context} Term={term} Definition={definition} />;
  };
}

export function generateMediaAssistSlide(
  title: string,
  bullets: (string | NestedListInfo | ReactElement)[],
  media: ReactElement,
) {
  return function ({ context }: { context: PresentationContext }) {
    return <MediaAssistSlide Title={title} context={context} info={bullets} Media={media} />;
  };
}
