import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await AppDataSource.getRepository(User).find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const user = new User();
      user.name = name;

      await AppDataSource.getRepository(User).save(user);
      res.json(user);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error });
    }
  }
}

export const userController = new UserController();
