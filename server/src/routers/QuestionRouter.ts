import express from 'express';
import { questionController } from '../controllers/QuestionController';

const router = express.Router();

router.post('/', questionController.createQuestion);
router.get('/:id', questionController.getQuestionById);
router.get('/', questionController.getAll);

export default router;
