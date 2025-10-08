import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import emailjs from "emailjs-com";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [responseClass, setResponseClass] = useState("success");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      setResponseClass("warning");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      user_email: email,
      reply_to: email,
    };

    emailjs
      .send(
        "service_lvgtz8h",
        "template_p5gpgwg",
        templateParams,
        "QkssPB9PI7OzDeDPs"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setResponseClass("success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("FAILED: ", error);
        setStatus("Failed to send message. Please try again.");
        setResponseClass("failed");
      });
  };

  return (
    <div className="contactComponent">
      <form className="contactForm" onSubmit={handleSubmit}>
        <div id="nameAndEmailContactForm">
          <TextField
            className="customInputField"
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            className="customInputField"
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
          />
        </div>
        <TextField
          className="customInputField"
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            mt: 3,
            px: 10,
            py: 1.5,
            fontSize: "0.75rem",
            fontFamily: "monospace",
            backgroundColor: "teal",
            color: "white",
            borderRadius: "50px",
            mx: "auto",
            display: "block",
            "&:hover": {
              backgroundColor: "#008080",
            },
          }}
        >
          Send
        </Button>
      </form>
      {status && (
        <Typography
          className={`statusMessage ${responseClass}`}
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          {status}
        </Typography>
      )}
    </div>
  );
}

export default ContactForm;
