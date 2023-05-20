import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const ContentCell = styled("td")(({ theme }) => ({
  border: `solid 4px ${theme.palette.text.secondary}`,
  width: "45%",
  height: "350px",
  verticalAlign: "top",
  padding: 16,
}));

const Header = styled("td")({
  textAlign: "center",
});

export function ActiveWaiting({ context }: Props) {
  return (
    <ContentSlide
      Title="Types of Tasks"
      context={context}
      Content={
        <table>
          <thead>
            <tr>
              <td></td>
              <Header>Fast</Header>
              <Header>Slow</Header>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Focus Needed</td>
              <ContentCell>
                <strong>Synchronous</strong>
                <ul>
                  <li>Human: Writing in a notebook</li>
                  <li>Computer: Simple Arithmetic</li>
                </ul>
              </ContentCell>
              <ContentCell>
                <strong>Synchronous</strong>
                <ul>
                  <li>Human: Sorting a deck of cards</li>
                  <li>Computer: Complex calculations</li>
                </ul>
              </ContentCell>
            </tr>
            <tr>
              <td>Involve Waiting</td>
              <ContentCell>
                <strong>Synchronous</strong>
                <ul>
                  <li>Human: Typing on a keyboard</li>
                  <li>Computer: Reading from memory</li>
                  <li>JavaScript: Updating a web page</li>
                </ul>
              </ContentCell>
              <ContentCell>
                <strong>Asynchronous</strong>
                <ul>
                  <li>Human: Doing laundry</li>
                  <li>Computer: Making a server request</li>
                  <li>Computer: Waiting on a timer</li>
                </ul>
              </ContentCell>
            </tr>
          </tbody>
        </table>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
