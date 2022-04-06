import { Theme } from "@material-ui/core";

const decorationHeight = 96;
export const titleDecorator = (theme: Theme) => ({
  "&::before": {
    content: '" "',
    height: decorationHeight,
    width: 48,
    backgroundColor: theme.palette.secondary.main,
    position: "absolute" as const,
    left: 0,
    transform: `translateY(${-decorationHeight / 4}px)`,
  },
});
