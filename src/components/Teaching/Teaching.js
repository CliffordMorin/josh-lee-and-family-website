import React from "react";
import { Typography, Paper, Container, Grid } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import martin8 from "../../images/martin8.jpg";
import makeStyles from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Teaching = () => {
  const classes = makeStyles();
  return (
    <Container align="center" sx={{ mt: 5 }}>
      <Paper
        elevation={16}
        sx={{ py: 5, px: 1 }}
        style={{ backgroundColor: "#040404" }}
      >
        <Typography sx={{ pb: 5 }} variant="h2" align="center">
          <Bounce>Teaching</Bounce>
        </Typography>

        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <LazyLoadImage
              style={{ width: "100%", height: "auto" }}
              effect="blur"
              src={martin8}
              alt="glenn"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="left" py={2}>
              Having been guided by many wonderful teachers and musicians in his
              life, Glenndon understands how important a mentor can be in the
              life of a young person and artist.
            </Typography>
            <Typography variant="body1" align="left" py={2}>
              For fifteen years, he's been playing that supportive and engaging
              role for students as they develop their passions for music and the
              arts, whether they are brand new to the field or a comeback
              player. He works together with each student to create an
              individualized plan that evolves based on goals, interests, tastes
              in music, needs, and accomplishments.
              <ul>
                <li>Basic trumpet fundamentals</li>
                <li>Advanced audition repertoire preparation</li>
                <li>Production and recording techniques</li>
                <li>
                  Appreciation for history and lineage of Black American Music
                </li>
                <li>Music theory</li>
                <li>Transcription</li>
                <li>Composition</li>
                <li>Help with school band music</li>
                <li>
                  Classical, Big Band (lead and section playing), Improvisation,
                  Latin, solo music production (looping), and more!
                </li>
              </ul>
            </Typography>
            <Typography variant="body1" align="left" py={1}>
              These are just some of the many topics that students have the
              opportunity to explore together with Glenndon.
            </Typography>
            <Typography variant="body1" align="left" py={2}>
              Additionally, he often works together with students' school music
              teachers to coordinate workshops for ensembles and brass sections,
              helping students to develop a deeper appreciation and skill level
              for the compositions they are working on. Please send an email
              with your contact information for any teaching inquiries to{" "}
              <a
                className={classes.mail}
                href="mailto:glenndon.gifford@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                glenndon.gifford@gmail.com
              </a>
              .
            </Typography>
            <Typography variant="body1" align="left" py={2}>
              Teaching Rates:
              <ul>
                <li>Half hour - $40</li>
                <li>One hour - $75</li>
                <li> 5 x One hour lessons - $350 (special deal)</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ pb: 5 }} variant="h2" align="center">
          <Bounce>Testimonials</Bounce>
        </Typography>
        <Typography
          variant="body1"
          className={classes.testimonials}
          align="center"
        >
          "I have been a student of Glenn's for five years, and can safely say
          his lessons have changed how I view the world and music as a whole.
          Under his tutelage, I've become a better musician and expanded my
          appreciation and enjoyment of music. He is a wonderful teacher, and
          explains concepts and instructs very well, being very engaging and
          patient. Glenn is very supportive and knows how to push me to improve.
          In my opinion, he is the best anyone could ask for." - <i>Amy</i>
        </Typography>
        <Typography
          variant="body1"
          className={classes.testimonials}
          align="center"
          py={4}
        >
          "My daughter has been learning trumpet with Glenn since 5th grade. His
          teaching and mentorship played an important role of shaping her way
          interacting and using music in her life. As an introvert, playing
          trumpet became a way she express herself and a place for her to find
          peace in her heart. He not only teaches her how to play but also how
          to listen and appreciate, and more importantly, how to create her own
          music. I can’t think of a better teacher for us." -{" "}
          <i>Amy's Mom, Feng Yi</i>
        </Typography>
        <Typography
          variant="body1"
          className={classes.testimonials}
          align="center"
          py={4}
        >
          "I want to start with getting this out of the way, I’ve studied
          trumpet under Glenn for around 4-5 years, and never once have I
          questioned whether or not he’s a good trumpet teacher. He’s
          understanding, a great trumpet player, and most importantly, he
          encourages you to play, not in a pushy way either. When I first
          started lessons, I wasn’t adamant about playing the trumpet. But, once
          I started, granted, I was stubborn so it took me a bit longer, I began
          to really enjoy it. He made me actually want to learn and have fun
          doing so by trying to understand and accommodate my personal methods
          of learning into his lessons. The easy-going feeling only added onto
          the flexible times and engaging activities. To me, Glenn has a more
          hands-on way of teaching, doing small projects that revolve around
          popular tunes I enjoy and helping me with more school-related music
          while also teaching life skills when it comes to being organized and
          some more specialized knowledge such as “mixing music”. All in all,
          he’s a great teacher who genuinely wants to help his students learn
          and become the best trumpet player they can be." - <i>Natalie</i>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Teaching;
