import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm: React.FC = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>
          Name <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control type="text" required placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Phone <span className="text-danger">*</span>
        </Form.Label>
        <div className="d-flex">
          <Form.Select className="me-2" style={{ maxWidth: '100px' }}>
            <option>USA +1</option>
            {/* Add more country codes if needed */}
          </Form.Select>
          <Form.Control type="text" required placeholder="123 456 7890" />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="you@example.com" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Message <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control as="textarea" rows={4} required placeholder="Your message" />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100">
        Submit Form
      </Button>
    </Form>
  );
};

export default ContactForm;
