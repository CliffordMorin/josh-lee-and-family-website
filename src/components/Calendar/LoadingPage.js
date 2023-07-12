import React from "react";
import { CircularProgress, Typography, Grid } from "@mui/material";

const LoadingPage = () => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "50vh",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }} color="text.colorful">
        Loading Shows...
      </Typography>
      <CircularProgress size={90} />
    </Grid>
  );
};

export default LoadingPage;
