import React from "react";
import ContactList from "./ContactList";
import { getData } from "./data";

function ContactApp() {
  const contacts = getData();
  return (
    <div className="contact-app">
      <h1>Daftar kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
