import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

function ContactForm() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [status, setStatus] = useState('');
   const [responseClass, setResponseClass] = useState('success');

   const handleSubmit = (event) => {
      event.preventDefault();

      if (!name || !email || !message) {
         setStatus('Please fill out all fields.');
         setResponseClass('warning');
         return;
      }

      const templateParams = {
         from_name: name,
         message: message,
         user_email: email,
         reply_to: email,
      };

      emailjs.send('service_lvgtz8h', 'template_p5gpgwg', templateParams, 'QkssPB9PI7OzDeDPs')
         .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('Message sent successfully!');
            setResponseClass('success');
            setName('');
            setEmail('');
            setMessage('');
      })
         .catch((error) => {
            console.log('FAILED: ', error);
            setStatus('Failed to send message. Please try again.');
            setResponseClass('failed');
      });
   };

   return (
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 1, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Contact
         </Typography>
         <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name"value={name}
               onChange={(e) => setName(e.target.value)}
               variant="outlined"
               margin="normal"
               required
            />
            <TextField
               fullWidth
               label="Email"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               variant="outlined"
               margin="normal"
               required
            />
            <TextField
               fullWidth
               label="Message"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               variant="outlined"
               margin="normal"
               required
               multiline
               rows={4}
            />
            <Button
               type="submit"
               variant="contained"
               color="primary"
               fullWidth
               sx={{ mt: 3 }}
            >
               Send
            </Button>
         </form>
         {status && (
         <Typography className={`statusMessage ${responseClass}`} variant="body1" color="textSecondary" align="center" sx={{ mt: 2 }}>
            {status}
         </Typography>
            )}
      </Box>
   );
}

export default ContactForm;
