const express = require('express');

const { games } = require('./object/game/game-service');
const { maps } = require('./object/map/map-service');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/map', (req, res) => {
  res.send(maps);
});

app.get('/api/game', (req, res) => {
  res.send(games);
});

app.get('/api', (req, res) => {
  const apis = [];
  res.send(apis);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port} for input.`);
});
