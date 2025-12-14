import { Typography, styled } from "@mui/material";
import { PageNumber } from "../../components/page-number";
import { MediaSlideProps } from "../../slides";
import { BaseContainer, BaseTitle } from "./base-styles";

const Container = styled(BaseContainer)({
  padding: 32,
  alignItems: "center",

  "& .media": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "75%",
    width: "auto",
    maxWidth: "100%",
    "& img": {
      height: "100%",
    },
  },
  "& .credit": {
    position: "absolute",
    bottom: 32,
    left: 32,
  },
});

export function MediaSlide({ context, Media, Title, Credit }: MediaSlideProps) {
  return (
    <Container>
      {typeof Title !== "string" ? (Title ?? null) : <BaseTitle>{Title}</BaseTitle>}
      <div className={"media"}>{Media}</div>
      {typeof Credit === "string" ? (
        <Typography className={"credit"} variant="caption">
          {Credit}
        </Typography>
      ) : (
        <div className={"credit"}>{Credit}</div>
      )}
      <PageNumber context={context} />
    </Container>
  );
}
