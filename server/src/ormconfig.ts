import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'postgres',
    synchronize: true,
    logging: true,
    entities: ['src/entity/**/*.ts'],
    migrations: [],
});
