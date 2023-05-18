/// <reference types="@mdx-js/loader" />

declare module "*.html" {
  const content: string;
  export default content;
}

declare module "*.zip" {
  const content2: string;
  export default content2;
}

declare module "*.svg" {
  const content1: string;
  export default content1;
}

declare type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};
