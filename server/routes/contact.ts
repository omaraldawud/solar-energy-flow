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
      host: process.env.SMTP_HOST, //'mail.solarenergyflow.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
        from: `"Solar Energy Customer Services" <${process.env.EMAIL_USER}>`,
        to: 'info@solarenergyflow.net',
        cc: `${process.env.EMAIL_USER}`,
        bcc: 'Omar.Aldawud@gmail.com',
        subject: 'New Contact Form Submission | Solar Energy Flow',

        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // fallback

        html: `
          <div style="font-family: Arial, sans-serif; padding: 16px; background: #f9f9f9;">
            <h2 style="color: #333;">New Contact Form Submission | Solar Energy Flow</h2>
            <table cellpadding="8" cellspacing="0" border="0" style="background: #fff; border: 1px solid #ddd; border-radius: 6px;">
              <tr>
                <td><strong>Name:</strong></td>
                <td>${name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>${email}</td>
              </tr>
              <tr>
                <td><strong>Message:</strong></td>
                <td style="white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Submitted from the Solar Energy Flow website.
            </p>
          </div>
        `,
      });


    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    next(error); // Express 5 prefers error handling via next()
  }
});

module.exports = router;