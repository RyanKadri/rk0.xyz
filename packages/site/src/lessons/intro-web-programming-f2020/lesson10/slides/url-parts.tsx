import { styled } from "@mui/material";
import { blue, green, orange, purple, red } from "@mui/material/colors";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const Container = styled("div")(({ theme }) => ({
  "& .url": {
    marginTop: 16,
    display: "inline-block",
  },
  "& .protocol": {
    color: red["500"],
  },
  "& .domainName": {
    color: blue["500"],
  },
  "& .port": {
    color: green["500"],
  },
  "& .path": {
    color: theme.palette.mode === "dark" ? purple["300"] : purple["500"],
  },
  "& .query": {
    color: orange["500"],
  },
}));

export function UrlParts({ context }: Props) {
  return (
    <ContentSlide
      Title="URL Anatomy"
      context={context}
      Content={
        <Container>
          <span className={"url"}>
            <span className={"protocol"}>https</span>://
            <span className={"domainName"}>spy-notes-api.rk0.xyz</span>:<span className={"port"}>443</span>
            <span className={"path"}>/users/abc123/notes</span>?<span className={"query"}>page=1&amp;limit=10</span>
          </span>
          <ul className={"partList"}>
            <li>
              <b className={"protocol"}>Protocol: </b>
              What communication method the server will use to talk to the client
            </li>
            <li>
              <b className={"domainName"}>Domain Name: </b>
              What physical(ish) server to talk to
            </li>
            <li>
              <b className={"port"}>Port: </b>
              What service on the physical(ish) server to talk to
            </li>
            <li>
              <b className={"path"}>Path: </b>
              What resource(s) on the server to interact with (not necessarily a file)
            </li>
            <li>
              <b className={"query"}>Query: </b>
              Other information about the request / resource(s)
            </li>
          </ul>
        </Container>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
