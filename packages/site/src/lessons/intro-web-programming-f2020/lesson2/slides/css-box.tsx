import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import img from "../assets/box-model-alt-small.png";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
});
interface Props {
  context: PresentationContext;
}

export function CssBox({ context }: Props) {
  return (
    <ContentSlide
      Title="CSS Fundamentals: Box Model"
      context={context}
      Content={
        <Container>
          <img src={img.src} />
        </Container>
      }
    />
  );
}
