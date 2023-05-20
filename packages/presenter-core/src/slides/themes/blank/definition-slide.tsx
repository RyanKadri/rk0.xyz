import { Typography, styled } from "@mui/material";
import { PageNumber } from "../../components/page-number";
import { DefinitionSlideProps } from "../../slides";
import { BaseTitle, CenteredContentContainer } from "./base-styles";

const DefinitionBox = styled("dl")({
  width: "70%",
});

export function DefinitionSlide({ context, Term, Definition }: DefinitionSlideProps) {
  return (
    <CenteredContentContainer>
      <DefinitionBox>
        <dt>
          {typeof Term !== "string" ? (
            Term
          ) : (
            <BaseTitle variant="h4" color="secondary">
              {Term}
            </BaseTitle>
          )}
        </dt>
        <dd>{typeof Definition !== "string" ? Definition : <Typography variant="body1">{Definition}</Typography>}</dd>
      </DefinitionBox>
      <PageNumber context={context} />
    </CenteredContentContainer>
  );
}
