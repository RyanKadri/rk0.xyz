import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { ExampleDefinition } from "../../../../presenter-core/src/services/types";
import { SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";
import { ExamplePlayground } from "../components/example-playground";

const Container = styled("main")(({ theme }) => ({
  display: "flex",
  minHeight: "calc(100vh - 64px)",
  maxWidth: "100vw",
  "& .codeContainer": {
    display: "flex",
    flexDirection: "column",
    padding: "16px 16px 0px 16px",
    boxSizing: "border-box",
    flexGrow: 1,
    width: "calc(100vw - 256px)",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(),
    },
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 88px)",
    },
  },
  "& .exampleHeader": {
    display: "flex",
    alignItems: "center",
  },
  "& .sidebar": {
    minWidth: 240,
  },
  "& .sidebarSurface": {
    minWidth: 240,
    paddingTop: theme.spacing(8),
  },
}));

interface Props {
  examples: ExampleDefinition[];
  currExample: number;
  baseUrl: string;
  highlightedCode?: SyntaxHighlightedBlock;
}
export function ExampleViewer({ examples, currExample, baseUrl, highlightedCode }: Props) {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Container>
      <Drawer
        className={"sidebar"}
        variant={onMobile ? "temporary" : "permanent"}
        classes={{ paper: "sidebarSurface " }}
        open={drawerOpen}
        anchor="left"
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {examples.map((example, i) => (
            <ListItem
              button
              component={Link}
              href={`${baseUrl}/${i}`}
              key={example.title}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={example.title}></ListItemText>
            </ListItem>
          ))}
          {/* TODO - Add external examples here */}
        </List>
      </Drawer>
      <div className={"codeContainer"}>
        <header className={"exampleHeader"}>
          <Hidden mdUp>
            <IconButton onClick={() => setDrawerOpen(!drawerOpen)} size="large">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Hidden>
          <Typography variant="h5">{examples[currExample].title}</Typography>
        </header>
        <ExamplePlayground example={examples[currExample]} highlightedCode={highlightedCode!} />
      </div>
    </Container>
  );
}
