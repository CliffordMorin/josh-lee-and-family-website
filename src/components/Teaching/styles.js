import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mail: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  testimonials: {
    padding: "0px 250px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
    },
  },
}));
