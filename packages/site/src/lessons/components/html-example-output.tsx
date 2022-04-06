import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(_ => ({
  content: {
    border: "dotted 2px #999",
    flexGrow: 1,
    backgroundColor: "white",
  },
  newTabButton: {
    position: "absolute",
    right: 24,
    transform: "translate(0px, -100%)",
  },
}));

interface Props {
  code: string;
}

export function HTMLExampleOutput({ code }: Props) {
  const classes = useStyles();
  const toBlobPage = () => {
    const parser = new DOMParser();
    const pageToLoad = parser.parseFromString(code, "text/html");
    const images = Array.from(pageToLoad.querySelectorAll("img"));
    images.forEach(image => {
      image.src = toAbsolute(image.src);
    });
    const links = Array.from(pageToLoad.querySelectorAll("a"));
    links.forEach(link => {
      link.href = toAbsolute(link.href);
    });
    const pageBlob = URL.createObjectURL(
      new Blob(["<!DOCTYPE html>\n" + pageToLoad.documentElement.outerHTML], {
        type: "text/html; charset=utf-8",
      })
    );
    window.open(pageBlob, "_blank");
  };

  return (
    <>
      <Button variant="contained" color="primary" size="small" onClick={toBlobPage} className={classes.newTabButton}>
        Open in tab
      </Button>
      <iframe className={classes.content} srcDoc={code} />
    </>
  );
}

function toAbsolute(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.href;
  } catch {
    return "";
  }
}
