import { Typography, styled } from "@mui/material";
import { titleDecorator } from "../../../services/style-chunks";
import { PageNumber } from "../../components/page-number";
import { TitleSlideProps } from "../../slides";
import { BaseContainer, BaseSubtitle } from "../blank/base-styles";

const containerPadding = 128;
const subTitleSpacing = containerPadding / 2;

const Container = styled(BaseContainer)(({ theme }) => ({
  padding: containerPadding,

  "& .titleContainer": {
    marginTop: "auto",
    ...titleDecorator(theme),
  },
  "& .subtitleContainer": {
    marginTop: subTitleSpacing,
  },
}));

const StyledTitle = styled(Typography)({
  fontSize: "1.75rem",
});

export function TitleSlide({ Title, Subtitle, context }: TitleSlideProps) {
  return (
    <Container>
      <div className={"titleContainer"}>
        {typeof Title !== "string" ? Title : <StyledTitle variant="h3">{Title}</StyledTitle>}
      </div>
      <div className={"subtitleContainer"}>
        {typeof Subtitle !== "string" ? Subtitle : <BaseSubtitle variant="h4">{Subtitle}</BaseSubtitle>}
      </div>
      <PageNumber context={context} />
    </Container>
  );
}
