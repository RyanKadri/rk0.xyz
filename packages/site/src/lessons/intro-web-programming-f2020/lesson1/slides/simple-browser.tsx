import { styled } from "@mui/material";

const Container = styled("div")({
  padding: 32,
  height: "100%",

  "&. browser": {
    border: "solid 2px #777",
    borderRadius: 4,
    height: "100%",
    width: "100%",
  },
  "&. search": {
    width: "100%",
    padding: "12px 24px",
    boxSizing: "border-box",
    backgroundColor: "#e1e1e1",
  },
  "&. searchInput": {
    width: "100%",
    border: "solid 1px #ccd",
    padding: 8,
  },
  "&. viewport": {
    color: "#444",
  },
  "&. content": {
    padding: 16,
  },
  "&. contentHeader": {
    margin: 0,
    padding: "8px 24px",
    backgroundColor: "hsla(227, 70%, 50%, 1)",
    color: "white",
  },
});

export function SimpleBrowserSlide() {
  return (
    <Container>
      <div>
        <header>
          <input type="text" placeholder="Enter a URL" />
        </header>
        <main>
          <h1>MyFaceGram</h1>
          <div>You have 617 Notifications!</div>
        </main>
      </div>
    </Container>
  );
}
