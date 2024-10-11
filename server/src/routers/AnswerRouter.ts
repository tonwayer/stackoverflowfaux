import express from 'express';
import { answerController } from '../controllers/AnswerController';

const router = express.Router();

router.get('/question/:id', answerController.getAnswersForQuestion);
router.post('/', answerController.createAnswer);

export default router;
