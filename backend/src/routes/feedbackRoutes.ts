import { Router } from 'express';
import { getAllFeedback, submitFeedback } from '../controllers/feedbackController';

const router = Router();

router.get('/', getAllFeedback);
router.post('/', submitFeedback);

export default router;
