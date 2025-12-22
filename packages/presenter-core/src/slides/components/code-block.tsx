import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClickAwayListener, Divider, IconButton, List, ListItem, Paper, Popper, Tooltip, styled } from "@mui/material";
import { ReactNode, useRef, useState } from "react";
import { LoggedConsoleMessage, executeFunction } from "../../services/js-execution";

const StyledCodeBlock = styled("div")(({ theme }) => ({
  position: "relative",

  "& ::selection": {
    backgroundColor: theme.palette.primary["800"],
  },

  "& .controls": {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.1)",
    transition: "background-color ease-in-out 100ms",
    display: "flex",
    gap: 16,
    padding: "8px 16px",
    borderRadius: 4,
    "& button": {
      color: theme.palette.common.white,
    },
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },

  "& .tooltip": {
    fontSize: 12,
  },

  "& .consolePopper": {
    padding: 0,
    fontSize: 16,
    backgroundColor: theme.palette.primary[800],
    minWidth: 300,
    maxWidth: "100%",
    overflow: "auto",
    maxHeight: 500,
    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
    },
  },
}));

interface Props {
  code: SyntaxHighlightedBlock;
  className?: string;
  options?: CodeBlockOptions;
}

export interface CodeBlockOptions {
  canExecuteCode?: boolean;
}

export interface SyntaxHighlightedBlock {
  components: ReactNode;
  language: string;
}

export function CodeBlock({ code, className, options = {} }: Props) {
  const { canExecuteCode = false } = options;

  const [copyTooltip, setCopyTooltip] = useState(false);
  const [lastOutput, setLastOutput] = useState<LoggedConsoleMessage[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  const codeBlockRef = useRef<HTMLPreElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const onCopy = () => {
    window.getSelection()?.selectAllChildren(codeBlockRef.current!);
    setCopyTooltip(true);
    document.execCommand("copy");
    setTimeout(() => setCopyTooltip(false), 1000);
  };

  const onRun = () => {
    const output = executeFunction(codeBlockRef.current?.textContent ?? "");
    if (output.consoleMessages.length > 0) {
      setLastOutput(output.consoleMessages);
      setTimeout(() => {
        setShowOutput(true);
      });
    }
  };

  return (
    <StyledCodeBlock className={className}>
      <div className={"controls"}>
        {canExecuteCode && (
          <>
            <ClickAwayListener onClickAway={() => setShowOutput(false)}>
              <Popper open={showOutput} anchorEl={playButtonRef.current!}>
                <Paper className={"consolePopper"}>
                  <List dense>
                    {lastOutput.map((message, i) => (
                      <>
                        <ListItem key={i}>{message.message}</ListItem>
                        {i < lastOutput.length - 1 && <Divider />}
                      </>
                    ))}
                  </List>
                </Paper>
              </Popper>
            </ClickAwayListener>
            <IconButton onClick={onRun} size="small" aria-label="Play" ref={playButtonRef}>
              <FontAwesomeIcon icon={faPlay} size="xs" />
            </IconButton>
          </>
        )}
        <Tooltip open={copyTooltip} title="Copied" classes={{ tooltip: "tooltip" }}>
          <IconButton onClick={onCopy} size="small" aria-label="Copy">
            <FontAwesomeIcon icon={faCopy} size="xs" />
          </IconButton>
        </Tooltip>
      </div>
      <pre className={`language-${code?.language}`} style={{ margin: 0 }} ref={codeBlockRef}>
        <code className={`language-${code?.language}`}>{code.components}</code>
      </pre>
    </StyledCodeBlock>
  );
}
