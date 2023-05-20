import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import preview from "./bookreads.webp";

const Image = styled("img")({
  width: "80%",
  margin: "0 auto",
  display: "block",
});

export function BookreadsSlide({ context }: Props) {
  return (
    <ContentSlide
      Title="I want it to look like this"
      context={context}
      Content={<Image src={preview.src} alt="Bookreads Preview" />}
    />
  );
}

interface Props {
  context: PresentationContext;
}
