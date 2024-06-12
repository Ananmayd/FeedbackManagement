import { Request, Response } from 'express';
import { getFeedback, addFeedback } from '../services/feedbackService';

export const getAllFeedback = (req: Request, res: Response) => {
    const feedback = getFeedback();
    res.json(feedback);
};

export const submitFeedback = (req: Request, res: Response) => {
    const { name, feedback } = req.body;
    addFeedback(name, feedback);
    res.status(201).json({ message: 'Feedback submitted' });
};
