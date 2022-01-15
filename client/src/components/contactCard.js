import React from "react";

const ContactCard = ({ contact }) => {
    return (
        <div>
            <h1>{contact.name}</h1>
            <h1>{contact.email}</h1>
        </div>
    );
};

export default ContactCard;
