import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "100%",
    height: "auto",
    padding: "0px",
    margin: "0px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      left: "50%",
      transform: "translate(-50%)",
      height: "auto",
    },
  },
  text: {
    color: theme.palette.text.light,
    textAlign: "justify",
    textJustify: "inter-word",
    padding: "10px 40px",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px",
      fontSize: "1rem",
    },
  },
  button: {
    color: theme.palette.text.dark,
    marginBottom: "25px",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#000",
    },
  },
}));
