import { createStyles, Theme } from "@material-ui/core";

const decorationHeight = 96;
export const titleDecorator = (theme : Theme) => createStyles({
    "&::before" : {
        content: '" "',
        height: decorationHeight,
        width: 48,
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        left: 0,
        transform: `translateY(${-decorationHeight / 4}px)`
    }
});