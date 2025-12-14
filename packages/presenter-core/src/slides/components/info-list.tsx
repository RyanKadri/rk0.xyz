import { styled } from "@mui/material";
import React, { ReactElement } from "react";

const StyledListItem = styled("li")(({ theme }) => ({
  position: "relative",
  marginBottom: 16,
  "&::marker": {
    color: theme.palette.secondary.main,
  },
  "&.ordered": {
    display: "block",
    "&::before": {
      content: '" "',
      position: "absolute",
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary.main,
      height: 12,
      width: 12,
      top: 26,
      transform: "translate(-32px, -50%)",
    },
  },
}));

export function InfoList({ items, useOrderedLists = false }: Props) {
  return React.createElement(
    useOrderedLists ? "ol" : "ul",
    { style: { margin: "16px 0" } },
    ...items.map((item, i) => (
      <StyledListItem key={i} className={`${!useOrderedLists ? "ordered" : ""}`}>
        {typeof item === "string" ? (
          item
        ) : "text" in item ? (
          <>
            {item.text}
            <InfoList items={item.children} useOrderedLists={useOrderedLists} />
          </>
        ) : (
          item
        )}
      </StyledListItem>
    )),
  );
}

interface Props {
  items: (string | NestedListInfo | ReactElement)[];
  useOrderedLists?: boolean;
}

export interface NestedListInfo {
  text: string | ReactElement;
  children: (string | ReactElement | NestedListInfo)[];
}
