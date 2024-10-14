import express from 'express';
import userRouter from './routers/UserRouter';
import questionRouter from './routers/QuestionRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/questions', questionRouter);

export default router;
