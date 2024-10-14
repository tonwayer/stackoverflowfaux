import { Client } from '@elastic/elasticsearch';

export const elasticClient = new Client({
  node: `http://${process.env.ELASTICSEARCH_HOST || 'localhost'}:${process.env.ELASTICSEARCH_PORT || '9200'}`,
});
