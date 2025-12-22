import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { CodeBlockMdxWrapper } from "./packages/presenter-core/src/slides/components/code-block-mdx-wrapper";
import { InlineCode } from "./packages/presenter-core/src/slides/components/inline-code-mdx";
 
const components: MDXComponents = {
  code: props => <CodeBlockMdxWrapper className={props.className}>{props.children as string}</CodeBlockMdxWrapper>,
  inlineCode: props => <InlineCode>{props.children}</InlineCode>,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}