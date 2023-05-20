import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import defaultSite from "./responsive-different-site-1.png";
import mobileSite from "./responsive-different-site-2.png";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: 16,
  "& img": {
    width: "45%",
  },
});

const bullets = [
  `Early mobile web apps directed phones to a different url`,
  "This site had simpler HTML and was styled to run on a smaller screen",
  "Loaded a smaller set of features to run on the network",
  "Features were often missing in mobile (or desktop)",
  "Links shared from a mobile user to a desktop user looked weird",
];

export function UseMultipleSites({ context }: Props) {
  return (
    <ContentSlide
      Title="Approach 1: Use Multiple Sites"
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
