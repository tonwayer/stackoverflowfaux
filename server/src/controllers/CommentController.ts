import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Comment } from '../entities/Comment';
import { User } from '../entities/User';
import { Question } from '../entities/Question';
import { Answer } from '../entities/Answer';
import { Validate } from '../decorators/Validate';

class CommentController {
  @Validate(Comment)
  async createCommentForQuestion(req: Request, res: Response) {
    try {
      const { body, userId, questionId } = req.body;
      const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
      const question = await AppDataSource.getRepository(Question).findOneBy({ id: questionId });

      if (!user || !question) {
        res.status(404).json({ error: 'User or Question not found' });
        return;
      }

      const comment = new Comment();
      comment.body = body;
      comment.user = user;
      comment.question = question;

      await AppDataSource.getRepository(Comment).save(comment);
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  @Validate(Comment)
  async createCommentForAnswer(req: Request, res: Response) {
    try {
      const { body, userId, answerId } = req.body;
      const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
      const answer = await AppDataSource.getRepository(Answer).findOneBy({ id: answerId });

      if (!user || !answer) {
        res.status(404).json({ error: 'User or Answer not found' });
        return;
      }

      const comment = new Comment();
      comment.body = body;
      comment.user = user;
      comment.answer = answer;

      await AppDataSource.getRepository(Comment).save(comment);
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export const commentController = new CommentController();
