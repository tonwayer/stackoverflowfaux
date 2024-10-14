import { elasticClient } from './elasticsearch';

export async function createIndexes() {
  // Create an index for questions
  await elasticClient.indices.create({
    index: 'questions',
    body: {
      mappings: {
        properties: {
          id: { type: 'integer' },
          title: { type: 'text' },
          body: { type: 'text' },
          userId: { type: 'integer' },
          score: { type: 'integer' },
        },
      },
    },
  }, { ignore: [400] }); // Ignore error if index already exists

  // Create an index for answers
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
