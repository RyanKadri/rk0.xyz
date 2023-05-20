import { styled } from "@mui/material";
import { useState } from "react";
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

const ColorContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "33% 33% 33%",
  gridGap: 16,
  marginTop: 32,
  "& .colorBlock": {
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `solid 4px ${theme.palette.text.secondary}`,
    fontSize: "1.5rem",
    padding: 16,
  },
  "& .colorInput": {
    fontSize: "inherit",
    backgroundColor: "rgba(255,255,255,0.6)",
    width: "100%",
    borderColor: "transparent",
  },
  "& .customBlock": {
    gridColumnStart: 2,
    marginTop: 64,
  },
}));
export function NamedColors({ context }: Props) {
  const [customColor, setCustomColor] = useState("lightgreen");

  return (
    <ContentSlide
      Title="Named Colors"
      context={context}
      Content={
        <>
          <ColorContainer>
            {Object.entries(colors).map(([bg, text]) => (
              <div key={bg} style={{ backgroundColor: bg, color: text }} className={"colorBlock"}>
                {bg}
              </div>
            ))}
          </ColorContainer>
          <ColorContainer>
            <div style={{ backgroundColor: customColor }} className={`${"colorBlock"} ${"customBlock"}`}>
              <input
                onChange={e => setCustomColor(e.currentTarget.value)}
                value={customColor}
                className={"colorInput"}
              />
            </div>
          </ColorContainer>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
