import { createStyles, makeStyles } from "@mui/styles";
import { ReactNode } from "react";
import { CustomTheme } from "../../../../site/src/theme";

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    inline: {
      whiteSpace: "pre-wrap",
      fontSize: "1rem",
      backgroundColor: theme.palette.mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)",
      padding: 2,
      borderRadius: 4,
      color: theme.palette.secondary.dark,
    },
  })
);

interface Props {
  children: ReactNode;
}
export function InlineCode({ children }: Props) {
  const classes = useStyles();
  return <code className={classes.inline}>{children}</code>;
}
