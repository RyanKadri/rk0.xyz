import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: "2rem",
      "& th": {
        color: theme.palette.secondary.main,
        width: "50%",
      },
    },
  })
);

interface Props {
  context: PresentationContext;
}
export function MathCodeFunctions({ context }: Props) {
  const classes = useStyles();

  return (
    <ContentSlide
      Title="Functions vs Methods"
      context={context}
      Content={
        <Table className={classes.container}>
          <TableHead>
            <TableRow>
              <TableCell>Mathematical Functions</TableCell>
              <TableCell>General Java Methods</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Always produce the same output for a given input</TableCell>
              <TableCell>Can produce different values on each call (or no value at all)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Don't have any effect on other functions</TableCell>
              <TableCell>Can have "side-effects"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Have strict inputs and outputs</TableCell>
              <TableCell>Can change their parameters</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      }
    />
  );
}
