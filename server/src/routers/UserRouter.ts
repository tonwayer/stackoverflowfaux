import express from 'express';
import { userController } from '../controllers/UserController';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

export default router;
