import express from 'express';

const PORT = 3000;

const app = express();

app.get('/api', (req, res) => {
  res.send("<h1>Welcome to Sayari Knowledgh sharing center!</h1>")
});
app.listen(PORT);

