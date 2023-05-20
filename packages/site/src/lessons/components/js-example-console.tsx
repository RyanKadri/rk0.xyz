import { Card, CardHeader, styled } from "@mui/material";
import { EvalResult, LoggedConsoleMessage } from "../../../../presenter-core/src/services/js-execution";

const ConsoleContainer = styled(Card)(({ theme }) => ({
  marginTop: 8,

  "&. messageList": {
    margin: 0,
    padding: "8px 0px",
    borderTop: "solid 1px #aaa",
    maxHeight: 400,
    overflowY: "auto",
    "& li": {
      margin: 0,
      padding: 8,
      listStyle: "none",
      display: "flex",
      justifyContent: "space-between",
    },
    "& li:not(:last-of-type)": {
      borderBottom: "solid 1px #ccc",
    },
  },
  "&. error": {
    color: theme.palette.error.main,
  },
}));

interface Props {
  consoleMessages?: LoggedConsoleMessage[];
  result?: EvalResult;
}
export function JSExampleConsole({ consoleMessages, result }: Props) {
  return (
    <ConsoleContainer>
      <CardHeader title="Console" />
      <ul className={"messageList"}>
        {consoleMessages === undefined ? (
          <li>Listening for console messages</li>
        ) : (
          consoleMessages.map(message => (
            <li key={message.time.getTime()}>
              {message.message}
              <time>{message.time.toLocaleTimeString()}</time>
            </li>
          ))
        )}
        {result === undefined ? null : result.status === "success" ? (
          <li>Returned: {"" + JSON.stringify(result.result)}</li>
        ) : (
          <li className={"error"}>{result.error}</li>
        )}
      </ul>
    </ConsoleContainer>
  );
}
