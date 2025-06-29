"use strict";
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRouter = require('./routes/contact');
// Load appropriate env file
dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use('/api/contact', contactRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
