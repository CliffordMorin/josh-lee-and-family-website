import React from "react";

import NavTabsDesktop from "./NavTabsDesktop";
import NavTabsMobile from "./NavTabsMobile";

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import Logo from "../../images/logo.svg";

// import song from "../../audio/come-out.wav";
import { Link } from "react-router-dom";

//icons
// import { PlayCircle, PauseCircle } from "@mui/icons-material";

//animation

const Nav = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audio = new Audio(song);
  // const audioRef = useRef(audio);

  const theme = useTheme();

  // const playPause = (e) => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //     setIsPlaying(!isPlaying);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <AppBar color="primary" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "red" }}>
              <Typography
                variant="h1"
                noWrap
                component="div"
                sx={{
                  fontWeight: "bold",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img src={Logo} alt="logo" style={{ height: "6.5rem" }} />
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "unset",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                noWrap
                component="div"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  display: { xs: "flex", md: "none" },
                }}
              >
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: "4.5rem", margin: "0 auto" }}
                />
              </Typography>
            </Link>
          </Box>

          <NavTabsMobile />

          <NavTabsDesktop />

          {/* <IconButton
        color="warning"
        size="medium"
        variant="contained"
        aria-label="play/ pause"
        onClick={(e) => playPause()}
      >
        {isPlaying ? (
          <PauseCircle fontSize="large" />
        ) : (
          <PlayCircle fontSize="large" />
        )}
      </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
