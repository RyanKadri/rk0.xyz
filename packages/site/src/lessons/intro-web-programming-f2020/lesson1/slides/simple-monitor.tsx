import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .on": {
    backgroundColor: "#111",
    color: "white",
  },
  "& .button": {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: "silver",
    margin: "0px 8px",
  },
  "& .bezel": {
    flexBasis: 64,
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  "& .viewport": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    flexGrow: 1,
    gridTemplateRows: "repeat(4, 25%)",
    "& div": {
      border: `solid 2px ${theme.palette.text.secondary}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&::before": {
        counterIncrement: "pixel",
        content: '"Pixel: " counter(pixel)',
      },
    },
  },
  "& .monitor": {
    border: `solid 8px ${theme.palette.text.secondary}`,
    borderRadius: 2,
    height: "90%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    counterReset: "pixel 0",
  },
}));

export function SimpleMonitorSlide() {
  return (
    <Container>
      <div className={"monitor"}>
        <div className={"viewport"}>
          <div className={"on"}></div>
          <div className={"on"}></div>
          <div className={"on"}></div>
          <div> </div>
          <div className={"on"}></div>
          <div> </div>
          <div className={"on"}></div>
          <div> </div>
          <div className={"on"}></div>
          <div className={"on"}></div>
          <div className={"on"}></div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <div className={"bezel"}>
          <div className={"button"}></div>
          <div className={"button"}></div>
          <div className={"button"}></div>
        </div>
      </div>
    </Container>
  );
}
