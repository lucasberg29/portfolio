import React, { useEffect }  from 'react';

function ContactPage({setSelectedPage}) {
    useEffect(() => {
        setSelectedPage('contact');
      }, []); 

    return(
    <div className="contactPage">
        <h1>Contact</h1>
    </div>
    );
}

export default ContactPage;