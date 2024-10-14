import express from 'express';
import userRouter from './routers/UserRouter';

const router = express.Router();

router.use('/users', userRouter);

export default router;
