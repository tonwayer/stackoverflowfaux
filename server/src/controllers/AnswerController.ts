import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Answer } from '../entities/Answer';
import { Question } from '../entities/Question';
import { User } from '../entities/User';
import { Validate } from '../decorators/Validate';

class AnswerController {
  async getAnswersForQuestion(req: Request, res: Response) {
    try {
      const questionId = parseInt(req.params.id);
      const answers = await AppDataSource.getRepository(Answer).find({
        where: { question: { id: questionId } },
        relations: ['user', 'question'],
      });
      res.json(answers);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  @Validate(Answer)
  async createAnswer(req: Request, res: Response) {
    try {
      const { body, questionId, userId } = req.body;
      const question = await AppDataSource.getRepository(Question).findOneBy({ id: questionId });
      const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });

      if (!question || !user) {
        res.status(404).json({ error: 'Question or User not found' });
        return
      }

      const answer = new Answer();
      answer.body = body;
      answer.question = question;
      answer.user = user;

      await AppDataSource.getRepository(Answer).save(answer);
      res.json(answer);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export const answerController = new AnswerController();
