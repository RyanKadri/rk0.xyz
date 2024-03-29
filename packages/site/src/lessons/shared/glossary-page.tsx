import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { ReactNode, useEffect, useState } from "react";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";
import { MarkdownLabContainer } from "./lab";

const Container = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  maxWidth: "1200px",
  "& .termList": {
    margin: `${theme.spacing(2)} 0`,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
  },
  "& .codeBlock": {
    marginTop: theme.spacing(),
  },
  "& .referenceList": {
    margin: 0,
  },
}));

interface Props {
  items: GlossaryItem[];
}
export default function GlossaryPage({ items }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<GlossaryItem[]>([]);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setSearchResults(items.filter(item => item.term.toLowerCase().includes(term)).slice(0, 10));
  }, [searchTerm]);

  return (
    <Container>
      <h1>Glossary</h1>
      <TextField
        type="search"
        variant="outlined"
        label="Search"
        fullWidth
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.currentTarget.value);
        }}
      />
      <div className={"termList"}>
        {searchResults.map(item => (
          <GlossaryCard item={item} key={item.term} />
        ))}
      </div>
    </Container>
  );
}

interface GlossaryCardProps {
  item: GlossaryItem;
}
function GlossaryCard({ item }: GlossaryCardProps) {
  const [showingDetails, setShowingDetails] = useState(false);

  return (
    <Card>
      <CardHeader title={item.term} />
      <CardContent>
        <MarkdownLabContainer>
          <Typography>{item.description}</Typography>
          {showingDetails &&
            !!item.moreInfo &&
            item.moreInfo.map(info =>
              info.type === "code" ? <CodeBlock code={info.code} className={"codeBlock"} /> : info.content
            )}
          {showingDetails && !!item.references && (
            <>
              <Typography>References</Typography>
              <ul className={"referenceList"}>
                {item.references.map(reference => (
                  <li key={reference.link}>
                    <Link href={reference.link} target="_blank">
                      {reference.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </MarkdownLabContainer>
      </CardContent>
      <CardActionArea onClick={() => setShowingDetails(true)}>
        {!showingDetails && (!!item.moreInfo || !!item.references) && <Button color="primary">More details</Button>}
      </CardActionArea>
    </Card>
  );
}

export interface GlossaryItem {
  term: string;
  description: string | ReactNode;
  moreInfo?: (GlossaryCodeBlock | GlossaryContentBlock)[];
  references?: GlossaryReference[];
}

interface GlossaryCodeBlock {
  type: "code";
  code: SyntaxHighlightedBlock;
}

interface GlossaryContentBlock {
  type: "content";
  content: ReactNode;
}

interface GlossaryReference {
  display: string;
  link: string;
}
