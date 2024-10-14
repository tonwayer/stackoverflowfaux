import { DataSource } from 'typeorm';
import { QuestionSubscriber } from './subscribers/QuestionSubscriber';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'postgres',
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.ts'],
    subscribers: [QuestionSubscriber],
    migrations: [],
});
