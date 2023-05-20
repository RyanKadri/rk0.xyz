import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const Container = styled("div")({
  padding: "16px 0",
  "&. tabIndicator": {
    display: "none",
  },
  "&. table": {
    fontSize: "1rem",
  },
  "&. tabs": {
    marginBottom: 16,
  },
});

const mathOperators: OperatorDefinition[] = [
  op("+", "Addition", "1 + 2", "3"),
  op("-", "Subtraction", "2 - 1", "1"),
  op("*", "Multiplication", "4 * 4", "16"),
  op("/", "Division", "4 / 2", "2"),
  op("%", "Remainder", "7 % 5", "2"),
  op("**", "Exponent", "3 ** 2", "9"),
  op("++", "Increment", "b++", "Variable b is set to b + 1"),
  op("--", "Decrement", "b--", "Variable b is set to b - 1"),
];

const assignmentOperators: OperatorDefinition[] = [
  op("=", "Assignment", "a = 1", "Variable a is set to 1"),
  op("+=", "Addition Assignment", "a += 3", "Variable a is set to a + 3"),
  op("-=", "Subtraction Assignment", "a -= 3", "Variable a is set to a - 3"),
  op("*=", "Multiplication Assignment", "a *= 3", `""`),
  op("/=", "Division Assignment", "a /= 3", `""`),
];

const comparisonOperators: OperatorDefinition[] = [
  op("==", "Loose Equality", `3 == "3"`, "true"),
  op("===", "Strict Equality", `3 === "3"`, "false"),
  op("!=", "Loose Inequality", `3 != "3"`, "false"),
  op("!==", "Strict Inequality", `3 !== "3"`, "true"),
  op(">", "Greater than", "4 > 3", "true"),
  op("<", "Less than", "4 < 3", "false"),
  op(">=", "Greater than or equal", "4 >= 4", "true"),
  op("<=", "Less than or equal", "4 <= 5", "false"),
];

const logicalOperators: OperatorDefinition[] = [
  op("&&", "And", `5 > 4 && 7 > 6 && 3 > 4`, "false"),
  op("||", "Or", `5 > 6 || 1 > 2 || 3 > 2`, "true"),
  op("!", "Not", `!(3 > 2)`, "false"),
];

interface Props {
  context: PresentationContext;
}

export function MathOperators({ context }: Props) {
  return <OperatorsTableSlide title="Math Operators" operatorGroup={mathOperators} context={context} />;
}

export function AssignmentOperators({ context }: Props) {
  return <OperatorsTableSlide title="Assignment Operators" operatorGroup={assignmentOperators} context={context} />;
}

export function ComparisonOperators({ context }: Props) {
  return <OperatorsTableSlide title="Comparison Operators" operatorGroup={comparisonOperators} context={context} />;
}

export function LogicalOperators({ context }: Props) {
  return <OperatorsTableSlide title="Logical Operators" operatorGroup={logicalOperators} context={context} />;
}

interface OperatorTableProps {
  operatorGroup: OperatorDefinition[];
  title: string;
  context: PresentationContext;
}
function OperatorsTableSlide({ context, operatorGroup, title }: OperatorTableProps) {
  return (
    <ContentSlide
      Title={title}
      context={context}
      Content={
        <Container>
          <Table className={"table"}>
            <TableHead>
              <TableRow>
                <TableCell className={"table"}>Operator</TableCell>
                <TableCell className={"table"}>Description</TableCell>
                <TableCell className={"table"}>Example</TableCell>
                <TableCell className={"table"}>Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {operatorGroup.map(op => (
                <TableRow key={op.symbol}>
                  <TableCell className={"table"}>
                    <code>{op.symbol}</code>
                  </TableCell>
                  <TableCell className={"table"}>{op.description}</TableCell>
                  <TableCell className={"table"}>
                    <code>{op.example || ""}</code>
                  </TableCell>
                  <TableCell className={"table"}>{op.result || ""}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      }
    />
  );
}

interface OperatorDefinition {
  symbol: string;
  description: string;
  example?: string;
  result?: string;
}

function op(symbol: string, description: string, example?: string, result?: string): OperatorDefinition {
  return { symbol, description, example, result };
}
