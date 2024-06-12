import express from 'express';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

export default app;
