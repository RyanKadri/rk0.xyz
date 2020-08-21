import { generateReferencesSlide } from "../../../../shared/references-slide";

const links = [
    { label: "CSS Selector Target Practice", url: "https://flukeout.github.io/" },
    { label: "CSS Selector Cheat Sheet", url: "https://adam-marsden.co.uk/css-cheat-sheet" },
    { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
    { label: "Palette Builder", url: "https://material-ui.com/customization/color/#color-tool" },
    { label: "Media Query Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" }
]

export const References = generateReferencesSlide(links)