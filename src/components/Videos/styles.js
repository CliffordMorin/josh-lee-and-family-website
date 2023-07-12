import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  video: {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: 0,
  },
  iframe: {
    left: "10%",
    top: 0,
    height: "80%",
    width: "80%",
    position: "absolute",
  },
}));
