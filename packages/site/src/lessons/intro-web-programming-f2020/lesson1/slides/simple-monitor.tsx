import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    on: {
      backgroundColor: "#111",
      color: "white",
    },
    button: {
      height: 18,
      width: 18,
      borderRadius: 9,
      backgroundColor: "silver",
      margin: "0px 8px",
    },
    bezel: {
      flexBasis: 64,
      backgroundColor: "#222",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    viewport: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      flexGrow: 1,
      gridTemplateRows: "repeat(4, 25%)",
      "& div": {
        border: `solid 2px ${theme.palette.text.secondary}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          counterIncrement: "pixel",
          content: '"Pixel: " counter(pixel)',
        },
      },
    },
    monitor: {
      border: `solid 8px ${theme.palette.text.secondary}`,
      borderRadius: 2,
      height: "90%",
      width: "90%",
      display: "flex",
      flexDirection: "column",
      counterReset: "pixel 0",
    },
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export function SimpleMonitorSlide() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.monitor}>
        <div className={classes.viewport}>
          <div className={classes.on}></div>
          <div className={classes.on}></div>
          <div className={classes.on}></div>
          <div> </div>
          <div className={classes.on}></div>
          <div> </div>
          <div className={classes.on}></div>
          <div> </div>
          <div className={classes.on}></div>
          <div className={classes.on}></div>
          <div className={classes.on}></div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <div className={classes.bezel}>
          <div className={classes.button}></div>
          <div className={classes.button}></div>
          <div className={classes.button}></div>
        </div>
      </div>
    </div>
  );
}
