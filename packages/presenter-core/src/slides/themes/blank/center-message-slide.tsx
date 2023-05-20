import { PageNumber } from "../../components/page-number";
import { CenterMessageSlideProps } from "../../slides";
import { BaseTitle, CenteredContentContainer } from "./base-styles";

export function CenterMessageSlide({ context, Message }: CenterMessageSlideProps) {
  return (
    <CenteredContentContainer>
      {typeof Message !== "string" ? Message : <BaseTitle>{Message}</BaseTitle>}
      <PageNumber context={context} />
    </CenteredContentContainer>
  );
}
