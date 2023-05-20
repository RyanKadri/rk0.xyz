import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import defaultSite from "./desktop-google.png";
import mobileSite from "./mobile-google.png";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 16,
  "& a": {
    width: "49%",
  },
  "& a img": {
    width: "100%",
  },
});

const bullets = [
  "Uses the same URLs but the server sends different HTML + CSS",
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
            <a href={defaultSite.src} target="_blank">
              <img src={defaultSite.src} />
            </a>
            <a href={mobileSite.src} target="_blank">
              <img src={mobileSite.src} />
            </a>
          </Container>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
