// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import data from "../data/contacts.json";

const Contact = () => {
  return (
    <div>
      {data.map((contact, index) => (
        <div className="profile-card" key={index}>
          <img
            className="photo-profile"
            src={contact.photo}
          />
          <div className="profile-card-body">
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
