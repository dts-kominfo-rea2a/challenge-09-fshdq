// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = (props) => {
  return (
    <div className="profile-card">
      <img className="photo-profile" src={props.data.photo} />
      <div className="profile-card-body">
        <h2>{props.data.name}</h2>
        <p>{props.data.email}</p>
        <p>{props.data.phone}</p>
      </div>
    </div>
  );
};

export default Contact;
