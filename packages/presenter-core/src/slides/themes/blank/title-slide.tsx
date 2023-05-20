import { styled } from "@mui/material";
import { PageNumber } from "../../components/page-number";
import { TitleSlideProps } from "../../slides";
import { BaseContainer, BaseSubtitle, BaseTitle } from "./base-styles";

const containerPadding = 128;
const subTitleSpacing = containerPadding / 2;

const Container = styled(BaseContainer)({
  padding: containerPadding,
  "& .titleContainer": {
    marginTop: "auto",
  },
  "& .subtitleContainer": {
    marginTop: subTitleSpacing,
  },
});

export function TitleSlide({ Title, Subtitle, context }: TitleSlideProps) {
  return (
    <Container>
      <div className={"titleContainer"}>
        {typeof Title !== "string" ? Title : <BaseTitle variant="h3">{Title}</BaseTitle>}
      </div>
      <div className={"subtitleContainer"}>
        {typeof Subtitle !== "string" ? Subtitle : <BaseSubtitle variant="h4">{Subtitle}</BaseSubtitle>}
      </div>
      <PageNumber context={context} />
    </Container>
  );
}
