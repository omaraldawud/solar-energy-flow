import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');



  useEffect(() => {
    emailjs.init('user_ko6phmeIKmrDDuO1FzuHG'); //  EmailJS public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_8ccxx5a',      // Replace with your EmailJS service ID
      'template_tmo35fv',     // Replace with your EmailJS template ID
      formData,
      'user_ko6phmeIKmrDDuO1FzuHG'       // Replace with your EmailJS public key
    ).then(() => {
      setStatusMessage('Message sent successfully! We will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('Failed to send message:', error);
      setStatusMessage('Failed to send message. Please try again later.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="solar-form">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="solar-input"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="solar-input"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={5}
    className="solar-textarea"
  />
  <button type="submit" className="solar-button">
    Send
  </button>
  {statusMessage && <p className="solar-status">{statusMessage}</p>}
</form>


  );
}
