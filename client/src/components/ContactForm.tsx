import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // ✅ Prevent default browser form submission
    setStatus(null);

    console.log (formData.name," omar  ", formData.message)
    if (!formData.name || !formData.message) {
      setStatus({ type: 'error', message: 'Name and message are required.' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Email sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>  {/* ✅ IMPORTANT: Hook the submit handler here */}
      {status && (
        <Alert variant={status.type === 'success' ? 'success' : 'danger'}>
          {status.message}
        </Alert>
      )}

      <Form.Group className="mb-3">
        <Form.Label>Name <span className="text-danger">*</span></Form.Label>
        <Form.Control
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message <span className="text-danger">*</span></Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100">
        Submit Form
      </Button>
    </Form>
  );
};

export default ContactForm;
