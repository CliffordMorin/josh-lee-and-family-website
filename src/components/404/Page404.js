import React from "react";
import { Container, Button, Typography, Paper, Link } from "@mui/material";

const Page404 = () => {
  return (
    <Container align="center" sx={{ my: 10 }}>
      <Paper elevation={16} align="center" sx={{ p: 5 }}>
        <Typography variant="h1" sx={{ pb: 5 }}>
          404 page not found!
        </Typography>
        <Typography variant="h3" sx={{ pb: 5 }}>
          "Getting lost is not a waste of time. To be lost is as legitimate a
          part of your process as being found."
        </Typography>
        <Typography variant="h3" sx={{ pb: 5 }}>
          Although, to not be lost anymore click this button.
        </Typography>

        <Typography variant="h3">
          <Link
            sx={{ textDecoration: "none", color: "inherit" }}
            variant="h3"
            href="/"
          >
            <Button variant="contained" size="large">
              Go Home
            </Button>
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Page404;
