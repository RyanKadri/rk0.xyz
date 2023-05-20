import { Typography, styled } from "@mui/material";

export const CenteredContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  flexDirection: "column",
  padding: 64,
  fontSize: "1.75rem",
});

export const BaseContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",
  fontSize: "1rem",
});

export const BaseTitle = styled(Typography)({
  fontSize: "1.5rem",
});

export const BaseSubtitle = styled(Typography)({
  fontSize: "1.25rem",
});
