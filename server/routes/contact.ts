import { Router, Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email?: string;
  message: string;
}

const router = Router();

router.post('/', async (
  req: Request<{}, {}, ContactRequest>, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and message are required.' 
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'solarenergyflow.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Solar Energy Customer Services" <${process.env.EMAIL_USER}>`,
      to: 'Omar.Aldawud@gmail.coms',
      subject: 'New Contact Form Submission | Solar Energy Flow',
      text: `Name: ${name}\nEmail: ${email}\n\n\n\t\tMessage: ${message}`,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    next(error); // Express 5 prefers error handling via next()
  }
});

export default router;