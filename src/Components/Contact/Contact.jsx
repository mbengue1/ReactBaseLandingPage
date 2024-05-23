
//Imports
import React from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
    return (
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
          <div className="formGroup">
            {/**CLaSs Name */}
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className='test'
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            {/**Email */}
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            {/**Message */}
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              type='text'
              placeholder="Message"
              required></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
  
  export default Contact;