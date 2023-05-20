import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const VersionContainer = styled("div")({
  fontSize: "1.5rem",
  marginTop: 32,
  "& .major": {
    color: "blue",
  },
  "& .minor": {
    color: "green",
  },
  "& .patch": {
    color: "red",
  },
  "& .version": {
    fontFamily: "monospace",
  },
});

const PartList = styled("ul")({
  fontSize: "1.25rem",
  margin: 0,
  padding: 0,
  marginTop: 32,
  "& > li": {
    listStyle: "none",
    marginTop: 16,
  },
  "& .major": {
    color: "blue",
  },
  "& .minor": {
    color: "green",
  },
  "& .patch": {
    color: "red",
  },
  "& .version": {
    fontFamily: "monospace",
  },
});

export function SemanticVersioning({ context }: Props) {
  return (
    <ContentSlide
      Title="Semantic Versioning"
      context={context}
      Content={
        <>
          <VersionContainer>
            Version:{" "}
            <span className={"version"}>
              <span className={"major"}>7</span>.<span className={"minor"}>15</span>.<span className={"patch"}>20</span>
            </span>
          </VersionContainer>
          <PartList className={"partList"}>
            <li>
              <span className={"major"}>Major: </span>
              Gets incremented on breaking changes
              <ul>
                <li>Read the documentation before updating</li>
              </ul>
            </li>
            <li>
              <span className={"minor"}>Minor: </span>
              Gets incremented for new features
              <ul>
                <li>Update at some point but test your code</li>
              </ul>
            </li>
            <li>
              <span className={"patch"}>Patch: </span>
              Gets incremented for bug and security fixes
              <ul>
                <li>Should be safe (but test your code)</li>
              </ul>
            </li>
          </PartList>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
