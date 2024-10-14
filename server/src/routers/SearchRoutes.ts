import { Router, Request, Response } from 'express';
import { elasticClient } from '../utils/elasticsearch';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const { q } = req.query;

  if (typeof q !== 'string' || !q) {
    res.status(400).json({ error: 'Query parameter q is required and must be a non-empty string' });
    return;
  }
  try {
    const result = await elasticClient.search({
      index: 'questions',
      body: {
        query: {
          multi_match: {
            query: q,
            fields: ['title', 'body'],
          },
        },
      },
    });

    const hits = result.hits.hits.map((hit: any) => hit._source);
    res.json(hits);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

export default router;
