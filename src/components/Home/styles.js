import { makeStyles } from "@mui/styles";
import joan5 from "../../images/joan5.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${joan5})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "50%",
    },
  },
  logo: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  divider: {
    backgroundColor: theme.palette.text.dark,
    width: "40%",
    height: "3px",
    margin: "20px auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      ml: 0,
    },
  },
  textContainer: {
    paddingTop: "1%",
    paddingLeft: "13%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    "& span": {
      fontSize: "3rem",
      fontWeight: "bold",
      paddingRight: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "7%",
      paddingLeft: "30%",
      width: "100%",
      "& span": {
        fontSize: "2rem",
      },
      "& h5": {
        fontSize: "1.3rem",
      },
      "& h6": {
        fontSize: "1.3rem",
      },
    },
  },
}));
