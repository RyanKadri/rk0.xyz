import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import defaultSite from "./responsive-adapt-css-1.png";
import mobileSite from "./responsive-adapt-css-2.png";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: 16,
  margin: "0 -80px",
  "& img": {
    width: "49%",
  },
});

const bullets = [
  "Sites send back the same code for all clients",
  "Code adapts to different devices",
  "User interface code is mostly consistent",
  "Most likely to support all features",
  "Most likely to have a consistent appearance",
];

export function ResponsiveCSS({ context }: Props) {
  return (
    <ContentSlide
      Title="Approach 3: One Responsive Page"
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
