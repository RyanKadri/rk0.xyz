import { styled } from "@mui/material";
import c from "classnames";
import { titleDecorator } from "../../../services/style-chunks";
import { InfoList } from "../../components/info-list";
import { PageNumber } from "../../components/page-number";
import { ContentSlideProps } from "../../slides";
import { BaseContainer, BaseTitle } from "../blank/base-styles";

const Viewport = styled(BaseContainer)(({ theme }) => ({
  padding: "48px 128px 0px 128px",
  minHeight: "100%",

  "& code": {
    fontFamily: "monospace",
    backgroundColor: theme.palette.mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)",
    padding: "2px 4px",
    borderRadius: 4,
    color: theme.palette.secondary.dark,
  },
  "& .titleContainer": {
    ...titleDecorator(theme),
  },
}));

export function ContentSlide({ Title, Content, context, classes = {}, options = {} }: ContentSlideProps) {
  return (
    <Viewport className={c(classes.viewport)}>
      <div className={"titleContainer"}>
        {typeof Title !== "string" ? Title : <BaseTitle variant="h4">{Title}</BaseTitle>}
      </div>
      {!Array.isArray(Content) ? (
        Content
      ) : (
        <InfoList items={Content} useOrderedLists={options.useOrderedLists ?? false} />
      )}
      <PageNumber context={context} />
    </Viewport>
  );
}
