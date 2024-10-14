import express from 'express';
import { AppDataSource } from './ormconfig';
import 'reflect-metadata';

const PORT = 3000;

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    app.get('/api', (req, res) => {
      res.send("<h1>Welcome to Sayari Knowledgh sharing center!!!!</h1>")
    });
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
