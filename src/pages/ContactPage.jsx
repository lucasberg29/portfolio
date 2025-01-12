import React, { useEffect }  from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage({setSelectedPage}) {
    useEffect(() => {
        setSelectedPage('contact');
      }, []); 

    return(
    <div className="contactPage">
        <ContactForm></ContactForm>
    </div>
    );
}

export default ContactPage;