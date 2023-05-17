import { createStyles, makeStyles } from "@mui/material";
import { useState } from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/slides";

export const useStyles = makeStyles(_ =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      marginTop: 16,
      gap: 32,
      alignItems: "center",
    },
    block: {
      border: "solid 4px black",
      borderRadius: 4,
      width: 400,
      height: 400,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
    },
  })
);

export function ColorsOfLight() {
  return function ({ context }: { context: PresentationContext }) {
    const classes = useStyles();
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
      <ContentSlide
        Title="What happens if you mix colors of light together though?"
        context={context}
        Content={
          <div className={classes.container}>
            <div className={classes.block} style={{ backgroundColor: `rgba(${red}, ${green}, ${blue})` }} />
            <div className={classes.inputContainer}>
              <label>
                Red
                <input
                  type="range"
                  min={0}
                  max={255}
                  step={1}
                  value={red}
                  onChange={e => setRed(e.currentTarget.valueAsNumber)}
                />
              </label>
              <label>
                Blue
                <input
                  type="range"
                  min={0}
                  max={255}
                  step={1}
                  value={blue}
                  onChange={e => setBlue(e.currentTarget.valueAsNumber)}
                />
              </label>
              <label>
                Green??
                <input
                  type="range"
                  min={0}
                  max={255}
                  step={1}
                  value={green}
                  onChange={e => setGreen(e.currentTarget.valueAsNumber)}
                />
              </label>
            </div>
          </div>
        }
      />
    );
  };
}
