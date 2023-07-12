import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Button, Typography, Menu, MenuItem, Box } from "@mui/material";
import navLinks from "./navLinks";
import makeStyles from "./styles";

const NavTabsDesktop = () => {
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mediaMenuOpen, setMediaMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const mediaRef = useRef(null);
  const classes = makeStyles();

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

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
        alignItems: "center",
        flexGrow: 1,
        flexBasis: "auto",
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
                onClick={() => {
                  if (item.page === "About") {
                    handleAboutMenuOpen();
                  } else if (item.page === "Media") {
                    handleMediaMenuOpen();
                  }
                }}
              >
                <item.icon className={classes.IconsDesktop} />
                <Typography className={classes.navLinkTextDesktop} variant="h1">
                  {item.page}
                </Typography>
              </Button>
              {item.page === "About" && (
                <Menu
                  anchorEl={aboutRef.current}
                  keepMounted
                  open={Boolean(aboutMenuOpen)}
                  onClose={handleAboutMenuClose}
                >
                  {item.children.map((childItem) => (
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
                    </Link>
                  ))}
                </Menu>
              )}
              {item.page === "Media" && (
                <Menu
                  anchorEl={mediaRef.current}
                  keepMounted
                  open={Boolean(mediaMenuOpen)}
                  onClose={handleMediaMenuClose}
                  key={item.id}
                >
                  {item.children.map((childItem) =>
                    childItem.page === "EPK" ? (
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
              >
                <item.icon className={classes.IconsDesktop} />
                <Typography className={classes.navLinkTextDesktop} variant="h1">
                  {item.page}
                </Typography>
              </Button>
            </Link>
          );
        }
      })}
    </Box>
  );
};

export default NavTabsDesktop;
