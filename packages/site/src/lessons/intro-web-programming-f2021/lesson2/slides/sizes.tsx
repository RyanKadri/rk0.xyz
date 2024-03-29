import { styled } from "@mui/material";
import { useState } from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const units = ["px", "%", "em", "rem", "in", "vw", "vh", "vmax"];

const SizedBlock = styled("div")({
  border: "dotted 4px #444",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "hsla(200, 70%, 50%, 0.85)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ControlBlock = styled("div")(({ theme }) => ({
  padding: 16,
  border: `dashed 2px ${theme.palette.text.secondary}`,
  position: "absolute",
  bottom: 16,
  left: 16,
  zIndex: 4,
  backgroundColor: theme.palette.background.paper,
  "& label": {
    display: "flex",
  },
  "& .input": {
    fontSize: "inherit",
    display: "inline-block",
    marginLeft: 16,
    borderWidth: 2,
    border: "solid 2px #ccc",
    flexGrow: 1,
    margin: 4,
  },
}));
export function Sizes({ context }: Props) {
  const [unit, setUnit] = useState("px");
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(300);

  return (
    <ContentSlide
      Title="Sizing"
      context={context}
      Content={
        <>
          <SizedBlock
            style={{
              height: `${height}${unit}`,
              width: `${width}${unit}`,
            }}
          >
            height: {height}
            {unit}; width: {width}
            {unit};
          </SizedBlock>
          <ControlBlock>
            <label>
              Unit:
              <select className={`${"input"}`} onChange={e => setUnit(e.currentTarget.value)}>
                {units.map(unit => (
                  <option key={unit}>{unit}</option>
                ))}
              </select>
            </label>
            <label>
              Width:
              <input
                className={`${"input"}`}
                value={width}
                onChange={e => setWidth(parseInt(e.currentTarget.value || "0", 10))}
              />
            </label>
            <label>
              Height:
              <input
                className={`${"input"}`}
                value={height}
                onChange={e => setHeight(parseInt(e.currentTarget.value || "0", 10))}
              />
            </label>
          </ControlBlock>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
