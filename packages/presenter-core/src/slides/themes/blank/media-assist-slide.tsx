import { styled } from "@mui/material";
import { InfoList } from "../../components/info-list";
import { MediaAssistSlideProps } from "../../slides";
import { ContentSlide } from "./content-slide";

const MediaContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  "& img": {
    border: "solid 2px #444",
    padding: 8,
  },
});

export function MediaAssistSlide({ Title, info, Media, context }: MediaAssistSlideProps) {
  return (
    <ContentSlide
      Title={Title}
      context={context}
      Content={
        <>
          <InfoList items={info} />
          <MediaContainer>{Media}</MediaContainer>
        </>
      }
    />
  );
}
