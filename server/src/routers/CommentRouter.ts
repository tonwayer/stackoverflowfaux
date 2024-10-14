import express from 'express';
import { commentController } from '../controllers/CommentController';

const router = express.Router();

router.post('/question/:questionId', commentController.createCommentForQuestion);
router.post('/answer/:answerId', commentController.createCommentForAnswer);

export default router;
