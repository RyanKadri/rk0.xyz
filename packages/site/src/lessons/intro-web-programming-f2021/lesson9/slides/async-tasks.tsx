import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const ContentCell = styled("td")(({ theme }) => ({
  border: `solid 4px ${theme.palette.text.secondary}`,
  width: "43%",
  height: "200px",
  verticalAlign: "top",
  padding: 16,
}));

const Header = styled("td")({
  textAlign: "center",
});
export function AsyncTasks({ context }: Props) {
  return (
    <ContentSlide
      Title="Asynchronous Tasks"
      context={context}
      Content={
        <>
          <InfoList
            items={[
              <>
                <strong>Synchronous</strong> tasks require focus
              </>,
              <>
                <strong>Asynchronous</strong> tasks have idle time
              </>,
            ]}
          />
          <table>
            <thead>
              <tr>
                <td></td>
                <Header>Synchronous</Header>
                <Header>Asynchronous</Header>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Human</td>
                <ContentCell>
                  <ul>
                    <li>Writing</li>
                    <li>Drawing</li>
                    <li>Talking</li>
                  </ul>
                </ContentCell>
                <ContentCell>
                  <ul>
                    <li>Texting</li>
                    <li>Doing Laundry</li>
                    <li>Cooking</li>
                  </ul>
                </ContentCell>
              </tr>
              <tr>
                <td>Computer</td>
                <ContentCell>
                  <ul>
                    <li>Doing math</li>
                    <li>Re-rendering a web page</li>
                    <li>"Plain" JavaScript functions</li>
                  </ul>
                </ContentCell>
                <ContentCell>
                  <ul>
                    <li>Waiting on a timer</li>
                    <li>Making a network request</li>
                    <li>Responding to events</li>
                  </ul>
                </ContentCell>
              </tr>
            </tbody>
          </table>
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
