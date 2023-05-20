import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  styled,
} from "@mui/material";
import React from "react";
import { handledEval } from "../../../../presenter-core/src/services/js-execution";
import { TestCase } from "../../../../presenter-core/src/services/types";
import { arrayRemove, arrayReplace } from "../../common/functional-utils";
import { FunctionInfo } from "./js-example";

const TestCasesContainer = styled(Card)(({ theme }) => ({
  marginTop: 8,
  "&. testCase": {
    "& code": {
      fontFamily: "monospace",
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    "& input": {
      padding: 4,
      border: "dotted 2px #999",
      fontFamily: "monospace",
      fontSize: "1.15rem",
    },
  },
  "&. functionName": {
    border: "none",
    fontFamily: "monospace",
    backgroundColor: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.10)",
    },
  },
  "&. error": {
    color: theme.palette.error.main,
  },
  "&. warning": {
    color: theme.palette.warning.main,
  },
  "&. success": {
    color: theme.palette.success.main,
  },
}));

interface Props {
  functionInfo: FunctionInfo;
  testCases: TestCase[];
  onUpdateTestCases(testCases: TestCase[]): void;
  onRunTests(): void;
  onSelectTestCase(testCaseInd: number): void; // TODO - I don't like this
}
export function JSExampleTestCases({
  testCases,
  functionInfo,
  onUpdateTestCases,
  onRunTests,
  onSelectTestCase,
}: Props) {
  return (
    <TestCasesContainer>
      <CardHeader title={"Test Cases"} style={{ paddingBottom: 0 }} />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Operation</TableCell>
            <TableCell>Check</TableCell>
            <TableCell>Expected Result</TableCell>
            <TableCell>Actual Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testCases.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5}>It doesn't look like this function has any test cases. Try adding one!</TableCell>
            </TableRow>
          ) : (
            testCases.map((testCase, i) => (
              <TestCaseLine
                testCase={testCase}
                key={i}
                functionInfo={functionInfo}
                onUpdate={testCase => onUpdateTestCases(arrayReplace(testCases, i, testCase))}
                onDelete={() => onUpdateTestCases(arrayRemove(testCases, i))}
                onSelect={() => onSelectTestCase(i)}
              />
            ))
          )}
        </TableBody>
      </Table>
      <CardActions>
        <Button
          variant="outlined"
          onClick={() => onUpdateTestCases(testCases.concat({ paramString: "", expectedResult: "" }))}
        >
          Add a Test Case
        </Button>
        <Button variant="outlined" color="primary" onClick={onRunTests}>
          Run Test Cases
        </Button>
      </CardActions>
    </TestCasesContainer>
  );
}

interface TestCaseLineProps {
  testCase: TestCase;
  functionInfo: FunctionInfo;
  onUpdate(updated: TestCase): void;
  onDelete(): void;
  onSelect(): void;
}
function TestCaseLine({ functionInfo, testCase, onUpdate, onSelect }: TestCaseLineProps) {
  const [valid, result] = handledEval(testCase.expectedResult);
  const resultMatches = testCase.actualResult?.status === "success" && valid && testCase.actualResult.result === result;

  const onUpdateExpected = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      eval(e.target.value);
      onUpdate({ ...testCase, expectedResult: e.target.value, parsingError: false });
    } catch {
      onUpdate({ ...testCase, expectedResult: e.target.value, parsingError: true });
    }
  };

  return (
    <TableRow className={"testCase"}>
      <TableCell>
        <button className={"functionName"} onClick={onSelect}>
          {functionInfo.name}
        </button>
        (
        <input
          value={testCase.paramString || ""}
          size={(testCase.paramString || "").length + 1}
          disabled={functionInfo.parameters.length === 0}
          placeholder="Tested Parameters"
          onChange={e => onUpdate({ ...testCase, paramString: e.target.value })}
        />
        )
      </TableCell>
      <TableCell>
        <code>===</code>
      </TableCell>
      <TableCell>
        <Tooltip title={testCase.parsingError ? "Sure you typed that right?" : ""}>
          <input
            className={testCase.parsingError ? "warning" : ""}
            size={(testCase.expectedResult || "").length + 1}
            value={testCase.expectedResult}
            placeholder="Expected return value"
            onChange={onUpdateExpected}
          />
        </Tooltip>
      </TableCell>
      <TableCell>
        {testCase.actualResult === undefined ? null : testCase.actualResult.status === "success" ? (
          <code className={resultMatches ? "success" : "warning"}>{testCase.actualResult.result}</code>
        ) : (
          <code className={"error"}>Error: {testCase.actualResult.error}</code>
        )}
      </TableCell>
    </TableRow>
  );
}
