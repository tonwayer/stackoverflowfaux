import express from 'express';
import { AppDataSource } from './ormconfig';
import 'reflect-metadata';
import routes from './routes';

const PORT = 3000;

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    app.use('/api', routes);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
