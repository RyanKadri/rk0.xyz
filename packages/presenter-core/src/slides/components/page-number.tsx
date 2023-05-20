import { Typography, styled } from "@mui/material";
import { PresentationContext } from "../../services/types";

const StyledTypography = styled(Typography)({
  position: "absolute",
  bottom: 8,
  right: 16,
  color: "#777",
});

interface Props {
  context: PresentationContext;
}
export function PageNumber({ context }: Props) {
  return (
    <StyledTypography variant="body2">
      {context.pageNum} / {context.numPages}
    </StyledTypography>
  );
}
