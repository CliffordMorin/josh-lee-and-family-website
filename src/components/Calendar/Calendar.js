import { React } from "react";
import { Typography, Container, Grid, Paper, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

let ids = Array.from({ length: 15 }, (_, i) => i + 1);
let band = [
  "Philip Lassiter",
  "Philip Lassiter",
  "Ton Felices Quartet",
  "NJJO last concert",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "Ernesto Montenegro & Martin Diaz quintet",
  "Oscar Ployart and friends",
  "Martin Diaz plays Charlie Parker with Strings feat. Arts Simfònica Jove",
  "Martin Diaz plays Charlie Parker with Strings feat. Arts Simfònica Jove",
];
let date = [
  "Saturday, February 25, 2023 @ 15:00pm",
  "Thursday, March 23, 2023 @ TBA",
  "Friday, March 24, 2023 @ TBA",
  "Monday, April 17, 2023 @ TBA",
  "Saturday, May 13, 2023 @ TBA",
  "Sunday, May 14, 2023 @ TBA",
  "Wednesday, May 17, 2023 @ TBA",
  "Thursday, May 18, 2023 @ TBA",
  "Friday, May 19 2023 @ TBA",
  "Saturday, May 20, 2023 @ TBA",
  "Saturday, May 21, 2023 @ TBA",
  "Thursday, June 15, 2023 @ TBA",
  "Thursday, July 27, 2023 @ TBA",
  "Saturday, July 29, 2023 @ TBA",
  "Friday, August 4, 2023 @ TBA",
];
let location = [
  "S’Hertogenbosch (Live Soul Festival)",
  "Germany",
  "Jazz Cafe Alto (Amsterdam)",
  "Cinetol (Amsterdam)",
  "Venue (Rotterdam) ",
  "Fizi Theatre (Zierikzee)",
  "ZonaJazz (Torre de Fontaubella)",
  "Auditori Caló del Soli (Sant Josep de Sa Talaia, Ibiza)",
  "Jamboree (Barcelona)",
  "La Mar de Jazz (Cambrils)",
  "Ultramar (L’Escala)",
  "The WolfHound (Haarlem)",
  "Robadors23 (Barcelona)",
  "Jamboree (Barcelona)",
  "Nits de Jazz (Platja d’Aro)",
];

const Calender = () => {
  const theme = useTheme();
  let events = ids.map((id, i) => {
    return {
      id,
      band: band[i],
      date: date[i],
      location: location[i],
    };
  });

  return (
    <div>
      <Helmet>
        <title>Martin Diaz | Calender</title>
        <meta
          name="description"
          content="Martin Diaz Calender with dates of upcoming shows, concerts and public events."
        />
        <link rel="canonical" href="/calender" />
      </Helmet>
      <Typography variant="h2" align="center" sx={{ pt: 5, pb: 2 }}>
        <Bounce>UPCOMING SHOWS</Bounce>
      </Typography>
      <Divider
        sx={{
          zIndex: "100",
          backgroundColor: theme.palette.text.primary,
          height: "2px",
          width: "100px",
          margin: "auto",
          mb: 5,
        }}
      />
      <Container sx={{ mt: 7 }}>
        <Paper elevation={16}>
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pb: 2, pl: 5 }}>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h4"> Event </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h4"> Date </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography
                variant="h4"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {" "}
                Location{" "}
              </Typography>
            </Grid>
          </Grid>
          <Divider style={{ backgroundColor: "white" }} />

          {events.map((i) => {
            let currDate = new Date();
            let date = new Date(i.date.split("@")[0]);
            let lineThrough;
            if (currDate > date) {
              lineThrough = { textDecoration: "line-through" };
            } else {
              lineThrough = null;
            }
            return (
              <div key={i.id}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  sx={{ py: 3, pl: 5, pr: 5 }}
                  style={lineThrough}
                >
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography variant="h6">{i.band}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography variant="h6">{i.date}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography variant="h6">{i.location}</Typography>
                  </Grid>
                </Grid>
                <Divider
                  variant="middle"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            );
          })}

          <Divider />
        </Paper>
      </Container>
    </div>
  );
};

export default Calender;
