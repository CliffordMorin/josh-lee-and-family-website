import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navLinkTextMobile: {
    color: theme.palette.text.colorful,
    fontSize: ".9rem",
    display: "inline",
  },
  navLinkTextDesktop: {
    color: theme.palette.text.lessDark,
    fontSize: ".9rem",
    "& h1": {
      fontSize: ".9rem",
    },
    "&:hover": {
      color: theme.palette.text.dark,
    },
  },
  navLinkTextDropdownDesktop: {
    color: theme.palette.text.colorful,
    "&:hover": {
      color: theme.palette.text.colorfulHover,
    },
  },
  IconsDesktop: {
    color: theme.palette.text.lessDark,
    fontSize: "1.8rem",
    "&:hover": {
      color: theme.palette.text.dark,
    },
  },
  IconsMobile: {
    color: theme.palette.text.colorful,
    fontSize: "1.8rem",
    marginRight: "10px",
    "& path": {
      stroke: `${theme.palette.text.colorful} !important`,
    },
  },
  ButtonMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  IconsDesktopDropdown: {
    color: theme.palette.text.colorful,
    fontSize: "1.8rem",
    marginRight: "10px",
    "&:hover": {
      color: theme.palette.text.colorfulHover,
    },
    "& path": {
      stroke: `${theme.palette.text.colorful} !important`,
      "&:hover": {
        stroke: `${theme.palette.text.colorfulHover} !important`,
      },
    },
  },
}));
