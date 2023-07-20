import { makeStyles } from "@mui/styles";
import home from "../../images/home.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${home})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "50%",
    },
  },
  logo: {
    marginLeft: "0",
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
    marginLeft: "0",
    width: "55%",
    position: "absolute",
    top: "-50px",
    left: "-40px",
    "& span": {
      fontSize: "3rem",
      fontWeight: "bold",
      paddingRight: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      top: "-10px",
      left: "-20px",
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
