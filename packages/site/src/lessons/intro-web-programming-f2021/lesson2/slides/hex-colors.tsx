import { createStyles, makeStyles } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(
  createStyles({
    colorContainer: {
      height: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
      "& code": {
        color: "inherit",
        backgroundColor: "transparent",
      },
    },
    colorBlock: {
      borderRadius: 8,
      fontSize: "1.25rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "solid 4px #ccc",
      height: 360,
      width: 720,
      "& input": {
        marginLeft: 16,
      },
      "&:hover code span:not(:last-of-type)": {
        display: "inline-block",
        marginRight: 4,
        paddingRight: 4,
        borderRight: "dashed 4px #444",
      },
    },
    colorComponent: {},
    colorAdditionRow: {
      display: "flex",
      alignItems: "center",
      gap: 16,
    },
    colorAdditionBlock: {
      height: 180,
      width: 360,
      border: "solid 4px #fff",
    },
  })
);

function toHex(red: number, green: number, blue: number) {
  return [red, green, blue].map(el => el.toString(16).toUpperCase().padStart(2, "0"));
}
export function HexColors({ context }: Props) {
  const classes = useStyles();
  const [color, setColor] = useState({
    red: 120,
    green: 120,
    blue: 120,
  });

  const [hexRed, hexGreen, hexBlue] = toHex(color.red, color.green, color.blue);
  const inverseColor = color.red + color.green + color.blue > 128 * 3 ? "black" : "white";
  const onChange = (c: keyof typeof color) => (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = parseInt(e.currentTarget.value, 10);
    setColor(old => ({ ...old, [c]: newColor }));
  };

  return (
    <ContentSlide
      Title="Hex Colors"
      context={context}
      Content={
        <div className={classes.colorContainer}>
          <div
            style={{
              backgroundColor: `#${hexRed}${hexGreen}${hexBlue}`,
              color: inverseColor,
              borderColor: inverseColor,
            }}
            className={classes.colorBlock}
          >
            <code>
              #
              {[hexRed, hexGreen, hexBlue].map(colorComp => (
                <span className={classes.colorComponent} style={{ borderColor: inverseColor }}>
                  {colorComp}
                </span>
              ))}
            </code>
            <label>
              Red
              <input type="range" min="0" max="255" value={color.red} onChange={onChange("red")} />
            </label>
            <label>
              Green
              <input
                type="range"
                min="0"
                max="255"
                value={color.green}
                onChange={onChange("green")}
              />
            </label>
            <label>
              Blue
              <input
                type="range"
                min="0"
                max="255"
                value={color.blue}
                onChange={onChange("blue")}
              />
            </label>
          </div>
          <code>=</code>
          <div className={classes.colorAdditionRow}>
            <div
              className={classes.colorAdditionBlock}
              style={{ backgroundColor: `#${hexRed}0000` }}
            ></div>
            <code>+</code>
            <div
              className={classes.colorAdditionBlock}
              style={{ backgroundColor: `#00${hexGreen}00` }}
            ></div>
            <code>+</code>
            <div
              className={classes.colorAdditionBlock}
              style={{ backgroundColor: `#0000${hexBlue}` }}
            ></div>
          </div>
        </div>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
