import { Typography, styled } from "@mui/material";
import { titleDecorator } from "../../../../presenter-core/src/services/style-chunks";
import { PresentationContext } from "../../../../presenter-core/src/services/types";
import { PageNumber } from "../../../../presenter-core/src/slides/components/page-number";

export function generateQuestionSlide(question: string) {
  return function _QuestionSlide({ context }: { context: PresentationContext }) {
    return <QuestionSlide context={context} question={question} />;
  };
}

const Container = styled("div")(({ theme }) => ({
  padding: 48,
  "& .titleContainer": {
    marginTop: "auto",
    marginLeft: 40,
    ...titleDecorator(theme),
  },
}));

export function QuestionSlide({ question, context }: Props) {
  return (
    <Container>
      <div className={"titleContainer"}>
        <Typography variant="h2" color="inherit">
          {question}
        </Typography>
      </div>
      <PageNumber context={context} />
    </Container>
  );
}

interface Props {
  question: string;
  context: PresentationContext;
}
