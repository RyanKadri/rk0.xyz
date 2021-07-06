/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.html" {
    const content: string;
    export default content;
}

declare module "*.zip" {
    const content2: string;
    export default content2;
}

declare module "*.md" {
    const content3: string;
    export default content3;
}

declare module "*.svg" {
    const content1: string;
    export default content1;
}