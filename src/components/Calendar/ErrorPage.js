import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  Button,
  Link,
} from "@mui/material";

const ErrorPage = ({ error }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          textAlign: "center",
        }}
      >
        <Paper
          sx={{
            p: isMobile ? 4 : 8,
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: "center", color: "text.colorful" }}
          >
            There was an error loading the shows, reload the page to try again.
            If the problem persists, please contact me or my website developer.
          </Typography>
          <Link
            href="mailto:cliffthedev@gmail.com?subject=Joan%20Fort%20Calendar%20Error"
            target="_blank"
          >
            <Button
              variant="contained"
              size="medium"
              sx={{
                my: 2,
                backgroundColor: "#00B4B3",
                color: "background.paper",
                "&:hover": {
                  backgroundColor: "#00d9d8",
                },
              }}
            >
              Contact My Developer Here
            </Button>
          </Link>

          <Typography variant="h6" color="text.colorful">
            {error.message}
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ErrorPage;
