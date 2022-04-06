import { createStyles, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const colors = {
  red: "white",
  blue: "white",
  green: "white",
  aliceblue: "black",
  tomato: "black",
  rebeccapurple: "white",
};

const useStyles = makeStyles(theme =>
  createStyles({
    colorContainer: {
      display: "grid",
      gridTemplateColumns: "33% 33% 33%",
      gridGap: 16,
      marginTop: 32,
    },
    colorBlock: {
      borderRadius: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `solid 4px ${theme.palette.text.secondary}`,
      fontSize: "1.5rem",
      padding: 16,
    },
    colorInput: {
      fontSize: "inherit",
      backgroundColor: "rgba(255,255,255,0.6)",
      width: "100%",
      borderColor: "transparent",
    },
    customBlock: {
      gridColumnStart: 2,
      marginTop: 64,
    },
  })
);
export function NamedColors({ context }: Props) {
  const classes = useStyles();
  const [customColor, setCustomColor] = useState("lightgreen");

  return (
    <ContentSlide
      Title="Named Colors"
      context={context}
      Content={
        <>
          <div className={classes.colorContainer}>
            {Object.entries(colors).map(([bg, text]) => (
              <div key={bg} style={{ backgroundColor: bg, color: text }} className={classes.colorBlock}>
                {bg}
              </div>
            ))}
          </div>
          <div className={classes.colorContainer}>
            <div style={{ backgroundColor: customColor }} className={`${classes.colorBlock} ${classes.customBlock}`}>
              <input
                onChange={e => setCustomColor(e.currentTarget.value)}
                value={customColor}
                className={classes.colorInput}
              />
            </div>
          </div>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
