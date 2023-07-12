import React from "react";
import ImageGallery from "react-image-gallery";
import { Container, Typography, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";
import images from "./images";

import "./Pictures.css";

const Pictures = () => {
  const theme = useTheme();
  return (
    <div>
      <Helmet>
        <title>Joan Fort | Pictures</title>
        <meta name="description" content="Pictures of Joan Fort" />
        <link rel="canonical" href="/pictures" />
      </Helmet>
      <Typography
        align="center"
        variant="h2"
        sx={{ pt: 5, pb: 2, color: theme.palette.text.colorful }}
      >
        <Bounce>PICTURES</Bounce>
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
      <Container sx={{ mt: 5 }}>
        <ImageGallery items={images} lazyLoad={true} />
      </Container>
    </div>
  );
};

export default Pictures;
