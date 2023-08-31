import React from 'react';
import Style from '../style /contact.module.css'

const Contact = () => {
  return (
    <div className={Style.container}>
      <h1>Contact Me</h1>
      <p>If you have any questions or inquiries, feel free to reach out to me!</p>
      <form className={Style.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;