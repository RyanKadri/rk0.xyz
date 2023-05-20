import { styled } from "@mui/material";
import { ReactNode } from "react";

const StyledCode = styled("code")(({ theme }) => ({
  whiteSpace: "pre-wrap",
  fontSize: "1rem",
  backgroundColor: theme.palette.mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)",
  padding: 2,
  borderRadius: 4,
  color: theme.palette.secondary.dark,
}));

interface Props {
  children: ReactNode;
}
export function InlineCode({ children }: Props) {
  return <StyledCode>{children}</StyledCode>;
}
