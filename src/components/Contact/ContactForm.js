import React, { useState, useRef } from "react";
import { Grid, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import makeStyles from "./styles";

const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();
  const classes = makeStyles();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill in all required fields.", {
        theme: "colored",
        position: "bottom-left",
      });
      return;
    }

    // If all required fields are filled, submit the form
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
      (result) => {
        toast.success(
          "Thank you for your inquiry, we will get back to you as soon as possible!",
          { theme: "colored", position: "bottom-left" }
        );
        console.log(result.text);
      },
      (error) => {
        toast.error("Message failed to send, sorry. Please try again later.", {
          theme: "colored",
          position: "bottom-left",
        });
        console.log(error.text);
      }
    );

    // Clear the form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <ToastContainer />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="firstName"
            label="First Name"
            className={classes.inputStyle}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="firstName"
            value={firstName}
            color="primary"
            InputProps={{
              classes: { root: classes.inputStyle },
            }}
            onChange={(e) => setFirstName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Last Name"
            className={classes.inputStyle}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="lastName"
            value={lastName}
            color="primary"
            InputProps={{
              classes: { root: classes.inputStyle },
            }}
            onChange={(e) => setLastName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            className={classes.inputStyle}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            name="email"
            value={email}
            color="primary"
            InputProps={{
              classes: { root: classes.inputStyle },
            }}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            label="Message"
            className={classes.inputStyle}
            variant="outlined"
            fullWidth
            multiline
            required
            rows={4}
            margin="normal"
            value={message}
            name="message"
            color="primary"
            InputProps={{
              classes: { root: classes.inputStyle },
            }}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
