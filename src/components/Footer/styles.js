import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "theme.palette.text.dark",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
