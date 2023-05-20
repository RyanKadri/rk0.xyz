import { styled } from "@mui/material";
import c from "classnames";
import { InfoList } from "../../components/info-list";
import { PageNumber } from "../../components/page-number";
import { ContentSlideProps } from "../../slides";
import { BaseContainer, BaseTitle } from "./base-styles";

const Container = styled(BaseContainer)({
  padding: "48px 64px 0px 64px",
  minHeight: "100%",
});

export function ContentSlide({ Title, Content, context, classes = {}, options = {} }: ContentSlideProps) {
  return (
    <Container className={c(classes.viewport)}>
      <div>{typeof Title !== "string" ? Title : <BaseTitle variant="h4">{Title}</BaseTitle>}</div>
      {!Array.isArray(Content) ? (
        Content
      ) : (
        <InfoList items={Content} useOrderedLists={options.useOrderedLists ?? false} />
      )}
      <PageNumber context={context} />
    </Container>
  );
}
