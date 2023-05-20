import { styled } from "@mui/material";
import { PresentationContext } from "packages/presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "'Ubuntu Mono', monospace;",
  paddingTop: 32,
  "&. article": {
    color: "hsla(120, 50%, 50%, 1)",
    "& section": {
      paddingLeft: 32,
      margin: 8,
    },
  },
  "&. section1": {
    color: "hsla(0, 50%, 50%, 1)",
  },
  "&. section2": {
    color: theme.palette.mode === "dark" ? "yellow" : "purple",
  },
  "&. sectionContent": {
    color: theme.palette.text.primary,
    "& ul": {
      margin: 0,
    },
    "& p": {
      margin: 0,
    },
  },
}));

export function OutlineToHtml({ context }: Props) {
  return (
    <ContentSlide
      Title="HTML"
      context={context}
      Content={
        <Container>
          <section className={"article"}>
            Article
            <section className={"section1"}>
              Section
              <section className={"sectionContent"}>
                <ul>
                  <li>Header</li>
                  <li>Paragraph</li>
                  <li>Paragraph</li>
                </ul>
              </section>
            </section>
            <section className={"section2"}>
              Section
              <section className={"sectionContent"}>
                <ul>
                  <li>Header</li>
                  <li>...</li>
                </ul>
              </section>
            </section>
          </section>
          <section className={"article"}>
            {"<article>"}
            <section className={"section1"}>
              {"<section>"}
              <section className={"sectionContent"}>
                <p>{"<header>...</header>"}</p>
                <p>{"<p>...</p>"}</p>
                <p>{"<p>...</p>"}</p>
              </section>
              {"</section>"}
            </section>
            <section className={"section2"}>
              {"<section>"}
              <section className={"sectionContent"}>
                <p>{"<header>...</header>"}</p>
                <p>...</p>
              </section>
              {"</section>"}
            </section>
            {"</article>"}
          </section>
        </Container>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
