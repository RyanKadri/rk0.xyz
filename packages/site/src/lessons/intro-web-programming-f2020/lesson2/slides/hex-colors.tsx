import { styled } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const ColorContainer = styled("div")({
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .colorBlock": {
    borderRadius: 8,
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 4px #ccc",
    height: 480,
    width: 720,
    "& input": {
      marginLeft: 16,
    },
  },
});

function toHex(red: number, green: number, blue: number) {
  return "#" + red.toString(16) + green.toString(16) + blue.toString(16);
}
export function HexColors({ context }: Props) {
  const [color, setColor] = useState({
    red: 120,
    green: 120,
    blue: 120,
  });

  const hexColor = toHex(color.red, color.green, color.blue);
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
        <ColorContainer>
          <div style={{ backgroundColor: hexColor, color: inverseColor }} className={"colorBlock"}>
            {hexColor}
            <label>
              Red
              <input type="range" min="0" max="255" value={color.red} onChange={onChange("red")} />
            </label>
            <label>
              Green
              <input type="range" min="0" max="255" value={color.green} onChange={onChange("green")} />
            </label>
            <label>
              Blue
              <input type="range" min="0" max="255" value={color.blue} onChange={onChange("blue")} />
            </label>
          </div>
        </ColorContainer>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
