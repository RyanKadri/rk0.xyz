import { styled } from "@mui/material";
import { useState } from "react";
import { calculate, compare } from "specificity";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const SelectorRowContainer = styled("div")({
  display: "grid",
  gridGap: 16,
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "stretch",
  "& .selectorContainer": {
    padding: 24,
    borderRadius: 8,
    border: "solid 2px #ccc",
    marginTop: 24,
    "& input": {
      fontSize: "inherit",
      border: "solid 2px #ccc",
      marginLeft: 8,
      borderRadius: 4,
      width: "100%",
      fontFamily: "monospace",
    },
  },
});

const ComparisonRowContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  "& .comparisonRes": {
    fontSize: "2rem",
    margin: "0 16px",
  },
});

export function SpecificityComparison({ context }: Props) {
  const [selector1, setSelector1] = useState("");
  const [selector2, setSelector2] = useState("");
  const spec1 = calcSpecificity(selector1);
  const spec2 = calcSpecificity(selector2);

  return (
    <ContentSlide
      Title="Selector Specificity"
      context={context}
      Content={
        <>
          <SelectorRowContainer>
            <div className={"selectorContainer"}>
              <label>
                Selector 1
                <input value={selector1} onChange={e => setSelector1(e.currentTarget.value)} />
              </label>
            </div>
            <div className={"selectorContainer"}>
              <label>
                Selector 2
                <input value={selector2} onChange={e => setSelector2(e.currentTarget.value)} />
              </label>
            </div>
          </SelectorRowContainer>
          <ComparisonRowContainer>
            <SpecificityBox specificity={spec1} />
            <span className={"comparisonRes"}>{calcOperator(selector1, selector2)}</span>
            <SpecificityBox specificity={spec2} />
          </ComparisonRowContainer>
        </>
      }
    />
  );
}

function SpecificityBox({ specificity }: { specificity: Specificity | null }) {
  return (
    <div className={"selectorContainer"}>
      <p>IDs: {specificity?.ids ?? "??"}</p>
      <p>Classes / Attributes: {specificity?.classes ?? "??"}</p>
      <p>Tags: {specificity?.tags ?? "??"}</p>
    </div>
  );
}

function calcOperator(selector1: string, selector2: string) {
  try {
    const spec1 = calculate(selector1);
    const spec2 = calculate(selector2);
    const res = compare(spec1, spec2);
    return res === -1 ? "<" : res === 1 ? ">" : "=";
  } catch {
    return "=";
  }
}

function calcSpecificity(selector: string): Specificity | null {
  try {
    const res = calculate(selector);
    return !res
      ? null
      : {
          ids: res.A,
          classes: res.B,
          tags: res.C,
        };
  } catch {
    return null;
  }
}

interface Specificity {
  ids: number;
  classes: number;
  tags: number;
}

interface Props {
  context: PresentationContext;
}
