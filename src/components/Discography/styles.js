import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "100%",
    padding: "0px",
    borderRadius: "10px",
    margin: "0px 10px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  text: {
    color: "#fff",
    textAlign: "justify",
    textJustify: "inter-word",
    padding: "10px 40px",
  },
}));
