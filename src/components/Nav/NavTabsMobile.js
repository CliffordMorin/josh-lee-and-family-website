import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import navLinks from "./navLinks";
import useStyles from "./styles";

const NavTabsDesktop = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mediaMenuOpen, setMediaMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const mediaRef = useRef(null);
  const classes = useStyles();

  const handleAboutMenuOpen = () => {
    setAboutMenuOpen(true);
  };

  const handleAboutMenuClose = () => {
    setAboutMenuOpen(false);
  };

  const handleMediaMenuOpen = () => {
    setMediaMenuOpen(true);
  };

  const handleMediaMenuClose = () => {
    setMediaMenuOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElNav(false);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleMenuClose}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {navLinks.map((item) => {
          if (item.children) {
            return (
              <div key={item.id}>
                <Button
                  ref={item.page === "About" ? aboutRef : mediaRef}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                  className={classes.ButtonMobile}
                  onClick={() => {
                    if (item.page === "About") {
                      handleAboutMenuOpen();
                    } else if (item.page === "Media") {
                      handleMediaMenuOpen();
                    }
                  }}
                >
                  <item.icon className={classes.IconsMobile} />
                  <Typography
                    className={classes.navLinkTextMobile}
                    variant="h1"
                  >
                    {item.page}
                  </Typography>
                </Button>
                {item.page === "About" && (
                  <Menu
                    anchorEl={aboutRef.current}
                    keepMounted
                    anchorOrigin={{
                      vertical: "bottom", // Update vertical origin to "bottom"
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(aboutMenuOpen)}
                    onClose={() => {
                      handleAboutMenuClose();
                      handleMenuClose();
                    }}
                  >
                    {item.children.map((childItem) =>
                      childItem.page === "THE FAMILY" ? (
                        <a
                          href={childItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "unset",
                            display: "block",
                          }}
                          key={childItem.id}
                        >
                          <MenuItem
                            onClick={handleAboutMenuClose}
                            className={classes.navLinkTextDesktop}
                          >
                            <childItem.icon
                              className={classes.IconsDesktopDropdown}
                            />
                            <Typography
                              className={classes.navLinkTextDropdownDesktop}
                              variant="h1"
                            >
                              {childItem.page}
                            </Typography>
                          </MenuItem>
                        </a>
                      ) : (
                        <Link
                          to={childItem.link}
                          style={{
                            textDecoration: "none",
                            color: "unset",
                            display: "block",
                          }}
                          key={childItem.id}
                        >
                          <MenuItem
                            onClick={() => {
                              handleAboutMenuClose();
                              handleMenuClose();
                            }}
                          >
                            <childItem.icon className={classes.IconsMobile} />
                            <Typography
                              className={classes.navLinkTextMobile}
                              variant="h1"
                            >
                              {childItem.page}
                            </Typography>
                          </MenuItem>
                        </Link>
                      )
                    )}
                  </Menu>
                )}
                {item.page === "Media" && (
                  <Menu
                    anchorEl={mediaRef.current}
                    keepMounted
                    anchorOrigin={{
                      vertical: "bottom", // Update vertical origin to "bottom"
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(mediaMenuOpen)}
                    onClose={() => {
                      handleMediaMenuClose();
                      handleMenuClose();
                    }}
                  >
                    {item.children.map((childItem) =>
                      childItem.page === "RECORDINGS" ? (
                        <a
                          href={childItem.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "unset",
                            display: "block",
                          }}
                          key={childItem.id}
                        >
                          <MenuItem
                            onClick={() => {
                              handleMediaMenuClose();
                              handleMenuClose();
                            }}
                          >
                            <childItem.icon className={classes.IconsMobile} />
                            <Typography
                              className={classes.navLinkTextMobile}
                              variant="h1"
                            >
                              {childItem.page}
                            </Typography>
                          </MenuItem>
                        </a>
                      ) : (
                        <Link
                          to={childItem.link}
                          style={{
                            textDecoration: "none",
                            color: "unset",
                            display: "block",
                          }}
                          key={childItem.id}
                        >
                          <MenuItem
                            onClick={() => {
                              handleMediaMenuClose();
                              handleMenuClose();
                            }}
                          >
                            <childItem.icon className={classes.IconsMobile} />
                            <Typography
                              className={classes.navLinkTextMobile}
                              variant="h1"
                            >
                              {childItem.page}
                            </Typography>
                          </MenuItem>
                        </Link>
                      )
                    )}
                  </Menu>
                )}
              </div>
            );
          } else {
            return (
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "unset" }}
                key={item.id}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                  onClick={handleMenuClose}
                  className={classes.ButtonMobile}
                >
                  <item.icon className={classes.IconsMobile} />
                  <Typography
                    className={classes.navLinkTextMobile}
                    variant="h1"
                  >
                    {item.page}
                  </Typography>
                </Button>
              </Link>
            );
          }
        })}
      </Menu>
    </Box>
  );
};

export default NavTabsDesktop;
