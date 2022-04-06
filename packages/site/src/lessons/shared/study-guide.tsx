import React from "react";
import { useMarkdownLabStyles } from "./lab";

interface Props {
  children: any[];
}
export function StudyGuide({ children }: Props) {
  const classes = useMarkdownLabStyles();
  return <main className={classes.container}>{children}</main>;
}
