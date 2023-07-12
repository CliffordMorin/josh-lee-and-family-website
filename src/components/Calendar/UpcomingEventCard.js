import { Box, Typography, Button, Link } from "@mui/material";

const UpcomingEventCard = ({ event }) => {
  const { venue, datetime, url, title } = event;
  const date = new Date(datetime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const formatTitle = title?.split("@")[0].trim();

  console.log(formatTitle);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "background.paper",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 4,
        "&:not(:last-child)": {
          mb: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 1,
          px: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "text.dark",
            color: "text.colorful",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            mr: 1,
          }}
        >
          <Typography variant="body">{venue.location}</Typography>
        </Box>
        <Typography variant="body">{venue.name}</Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "text.colorful",
            borderRadius: 2,
            px: 2.5,
            py: 2,
            mr: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="background.paper">
            {date.split(" ")[0].toUpperCase()}
          </Typography>
          <Typography variant="body1" color="background.paper">
            {date.split(" ")[1]}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "text.colorful",
            mr: 2,
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          {formatTitle}
        </Typography>
        <Link href={url} target="_blank" rel="noreferrer">
          <Button
            variant="contained"
            size="medium"
            sx={{ color: "text.dark", bgcolor: "text.colorful" }}
          >
            RSVP
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default UpcomingEventCard;
