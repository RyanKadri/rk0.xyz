import { makeStyles } from "@mui/styles";
import prism from "prismjs";
import { CodeBlock, SyntaxHighlightedBlock } from "./code-block";

const useStyles = makeStyles({
  container: {
    overflow: "auto",
    maxHeight: "600px",
  },
});

interface Props {
  children: string;
  className?: string;
}
export function CodeBlockMdxWrapper({ children, className }: Props) {
  const classes = useStyles();
  const language = className?.replace(/language-/, "") ?? "plain";
  const html = prism.highlight(children, prism.languages[language], language);
  const code: SyntaxHighlightedBlock = {
    language,
    raw: children,
    html,
  };
  return <CodeBlock code={code} className={classes.container} />;
}
