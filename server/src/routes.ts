import express from 'express';
import userRouter from './routers/UserRouter';
import questionRouter from './routers/QuestionRouter';
import answerRouter from './routers/AnswerRouter';
import commentRouter from './routers/CommentRouter';
import searchRouter from './routers/SearchRoutes';

const router = express.Router();

router.use('/users', userRouter);
router.use('/questions', questionRouter);
router.use('/answers', answerRouter);
router.use('/comments', commentRouter);
router.use('/search', searchRouter);

export default router;
