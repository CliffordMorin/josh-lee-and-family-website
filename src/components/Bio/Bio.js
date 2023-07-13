import React, { useState } from "react";
import en from "./en.json";
import es from "./es.json";
import ca from "./ca.json";
import useTheme from "@mui/material/styles/useTheme";
import {
  Container,
  Grow,
  Typography,
  Grid,
  useMediaQuery,
  Divider,
  Button,
  Box,
} from "@mui/material";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import bio from "../../images/bio.jpg";
// import martin6small from "../../images/compressed/martin6small.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";

const Bio = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [language, setLanguage] = useState("en");

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Josh Lee and the Family | Biography</title>
        <meta
          name="description"
          content="Josh Lee and the Extended Family is a Philadelphia based ensemble that authentically celebrates the music and the dance of the swing era."
        />
        <link rel="canonical" href="/bio" />
      </Helmet>
      <Grow in>
        <Container maxWidth="xl" sx={{ backgroundColor: "#040404", pb: 7 }}>
          <Typography
            variant="h2"
            align="center"
            pt={5}
            gutterBottom
            sx={{ color: theme.palette.text.colorful }}
          >
            <Bounce>
              {language === "en"
                ? en?.title?.toUpperCase()
                : language === "ca"
                ? ca?.title?.toUpperCase()
                : es?.title?.toUpperCase()}
            </Bounce>
          </Typography>
          <Divider
            sx={{
              zIndex: "100",
              backgroundColor: theme.palette.text.colorful,
              height: "2px",
              width: "100px",
              margin: "auto",
              mb: 5,
            }}
          />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <LazyLoadImage
                className={classes.images}
                src={bio}
                effect="blur"
                alt="martin"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
              {/* <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  value="en"
                  onClick={handleLanguage}
                  className={classes.button}
                >
                  English
                </Button>
                <Button
                  value="es"
                  onClick={handleLanguage}
                  className={classes.button}
                >
                  Spanish
                </Button>
                <Button
                  value="ca"
                  onClick={handleLanguage}
                  className={classes.button}
                >
                  Catalan
                </Button>
              </Box> */}
              <Typography
                variant="body2"
                align="center"
                className={classes.text}
                py={isSmallScreen ? 0 : 2}
                px={2}
              >
                {language === "en"
                  ? en?.bio1
                  : language === "ca"
                  ? ca?.bio1
                  : es?.bio1}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                className={classes.text}
                p={2}
              >
                {language === "en"
                  ? en?.bio2
                  : language === "ca"
                  ? ca?.bio2
                  : es?.bio2}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                className={classes.text}
                p={2}
              >
                {language === "en"
                  ? en?.bio3
                  : language === "ca"
                  ? ca?.bio3
                  : es?.bio3}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Bio;
