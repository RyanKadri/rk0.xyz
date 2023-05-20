import { styled } from "@mui/material";
import { EmbedSlideProps } from "../../slides";

const Container = styled("div")({
  padding: "0",
});

export function FullSlide({ Content }: EmbedSlideProps) {
  return <Container>{Content}</Container>;
}
