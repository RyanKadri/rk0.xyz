import { Link, Typography, styled } from "@mui/material";
import { ReactElement } from "react";
import { PresentationContext, Reference } from "../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../presenter-core/src/slides/slides";

const ReferenceList = styled("ul")({
  "& li": {
    marginBottom: 16,
  },
  "& .noteCaption": {
    display: "block",
    marginLeft: 64,
    marginTop: 8,
  },
});

export function ReferencesSlide({ Title = "References", references, context }: Props) {
  return (
    <ContentSlide
      Title={Title}
      context={context}
      Content={
        <ReferenceList>
          {references.map(link => (
            <li key={link.url}>
              <Link href={link.url} target="_blank">
                {link.label}
              </Link>
              {link.note && (
                <Typography variant="caption" className={"noteCaption"}>
                  {link.note}
                </Typography>
              )}
            </li>
          ))}
        </ReferenceList>
      }
    />
  );
}

export function generateReferencesSlide(references: Reference[], title = "References") {
  return function ({ context }: { context: PresentationContext }) {
    return <ReferencesSlide Title={title} references={references} context={context} />;
  };
}

interface Props {
  Title?: string | ReactElement;
  references: Reference[];
  context: PresentationContext;
}
