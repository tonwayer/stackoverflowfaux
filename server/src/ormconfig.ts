import { DataSource } from 'typeorm';
import { QuestionSubscriber } from './subscribers/QuestionSubscriber';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: `${process.env.POSTGRES_HOST || 'localhost'}`,
    port: 5432,
    username: `${process.env.POSTGRES_USER || 'postgres'}`,
    password: `${process.env.POSTGRES_PASSWORD || 123}`,
    database: `${process.env.POSTGRES_DB || 'postgres'}`,
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.ts'],
    subscribers: [QuestionSubscriber],
    migrations: [],
});
