//Imports
import React, { useRef } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/xwkgdqno', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        alert('Your message has been sent successfully!');
      } else {
        alert('There was an issue submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="formGroup">
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
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
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
