import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');



  useEffect(() => {
    emailjs.init('user_ko6phmeIKmrDDuO1FzuHG'); // Your EmailJS public key here
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
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FFC107', border: 'none', cursor: 'pointer' }}>
        Send
      </button>
      {statusMessage && <p style={{ marginTop: '15px' }}>{statusMessage}</p>}
    </form>
  );
}
