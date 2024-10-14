import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent, RemoveEvent } from 'typeorm';
import { Question } from '../entities/Question';
import { elasticClient } from '../utils/elasticsearch';

@EventSubscriber()
export class QuestionSubscriber implements EntitySubscriberInterface<Question> {
  listenTo() {
    return Question;
  }

  async afterInsert(event: InsertEvent<Question>) {
    const question = event.entity;
    await elasticClient.index({
      index: 'questions',
      id: question.id.toString(),
      body: {
        id: question.id,
        title: question.title,
        body: question.body,
        userId: question.user.id,
        score: question.score,
      },
    });
    await elasticClient.indices.refresh({ index: 'questions' });
  }

  async afterUpdate(event: UpdateEvent<Question>) {
    const question = event.entity;
    if (question) {
      await elasticClient.update({
        index: 'questions',
        id: question.id.toString(),
        body: {
          doc: {
            title: question.title,
            body: question.body,
            score: question.score,
          },
        },
      });
      await elasticClient.indices.refresh({ index: 'questions' });
    }
  }

  async afterRemove(event: RemoveEvent<Question>) {
    const questionId = event.entityId;
    await elasticClient.delete({
      index: 'questions',
      id: questionId.toString(),
    });
    await elasticClient.indices.refresh({ index: 'questions' });
  }
}
