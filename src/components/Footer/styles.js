import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "theme.palette.text.light",
    "&:visited": {
      color: "#FFFFFF",
    },
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));
