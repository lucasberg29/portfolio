import { useEffect, useState } from "react";

import ContactForm from "../components/ContactForm.jsx";

function Contact() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {}, []);

  return (
    <div id="contact" className="contact">
      <div id="skillsTitle" className="sectionTitle">
        Contact
      </div>
      <div id="contactFormSalutation">
        Send me a message if you have ideas for games or projects. I'm also open
        to job opportunities.
      </div>
      <div className="contactPage">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
