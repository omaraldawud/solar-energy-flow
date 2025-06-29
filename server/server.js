// server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact';
dotenv.config();
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
// Use contact routes for /api/contact
app.use('/api/contact', contactRouter); // Simplified this line
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
