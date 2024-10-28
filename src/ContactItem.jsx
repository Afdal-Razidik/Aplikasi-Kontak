import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

function ContactItem({ imageUrl, name, tag }) {
  return (
    <div className="contact-item">
      <ContactItemBody name={name} tag={tag} />
      <ContactItemImage imageUrl={imageUrl} />
    </div>
  );
}

export default ContactItem;
