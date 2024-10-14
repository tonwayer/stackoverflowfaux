import { elasticClient } from './elasticsearch';

export async function createIndexes() {
  await elasticClient.indices.create({
    index: 'questions',
    body: {
      mappings: {
        properties: {
          id: { type: 'integer' },
          title: { type: 'text' },
          body: { type: 'text' },
          user: { type: 'object' },
          score: { type: 'integer' },
        },
      },
    },
  }, { ignore: [400] });

  await elasticClient.indices.create({
    index: 'answers',
    body: {
      mappings: {
        properties: {
          id: { type: 'integer' },
          body: { type: 'text' },
          userId: { type: 'integer' },
          questionId: { type: 'integer' },
          score: { type: 'integer' },
        },
      },
    },
  }, { ignore: [400] });
}
