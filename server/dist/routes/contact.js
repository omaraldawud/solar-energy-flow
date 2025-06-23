import { Router } from 'express';
import nodemailer from 'nodemailer';
const router = Router();
router.post('/', async (req, res, next) => {
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
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: 'info@solarenergyflow.net',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });
    }
    catch (error) {
        next(error); // Express 5 prefers error handling via next()
    }
});
export default router;
