import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import defaultSite from "./responsive-detect-browser-1.png";
import mobileSite from "./responsive-detect-browser-2.png";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: 16,
  "& img": {
    width: "45%",
  },
});

const bullets = [
  "Uses the same URLs and backend logic but sends back different content",
  "Links work again",
  "Features are often still missing",
  "Code and design scheme may became more unified (or may not)",
];

export function DetectBrowser({ context }: Props) {
  return (
    <ContentSlide
      Title="Approach 2: Detect the Browser"
      context={context}
      Content={
        <>
          <InfoList items={bullets} />
          <Container>
            <img src={defaultSite.src} />
            <img src={mobileSite.src} />
          </Container>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
