import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Question } from '../entities/Question';
import { User } from '../entities/User';

class QuestionController {
  async getAll(req: Request, res: Response) {
    try {
      const questions = await AppDataSource.getRepository(Question).find({
        relations: ['user'],
      });
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  async getQuestionById(req: Request, res: Response) {
    try {
      const questionId = parseInt(req.params.id);
      const question = await AppDataSource
        .getRepository(Question)
        .findOne({
          where: { id: questionId },
          relations: [
            'user',
            'comments',
            'answers.user',
            'answers.comments'
          ]
        });
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  async createQuestion(req: Request, res: Response) {
    try {
      const { title, body, userId } = req.body;
      const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return
      }

      const question = new Question();
      question.title = title;
      question.body = body;
      question.user = user;

      await AppDataSource.getRepository(Question).save(question);
      res.json(question);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export const questionController = new QuestionController();
