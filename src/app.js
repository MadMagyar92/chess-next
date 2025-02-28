const express = require('express');

const { CoreService } = require('./core-service');
const coreService = new CoreService();

const {
   getMapsApi, getMapApi, getTerrainFromMapApi,
   getGamesApi, getGameApi, getUnitFromGameApi,
   getMovesForUnitFromGameApi } = require('./api');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/map', getMapsApi(coreService));
app.get('/api/map/:mapId', getMapApi(coreService));
app.get('/api/map/:mapId/terrain/:x/:y', getTerrainFromMapApi(coreService));

app.get('/api/game', getGamesApi(coreService));
app.get('/api/game/:gameId', getGameApi(coreService));
app.get('/api/game/:gameId/unit/:x/:y', getUnitFromGameApi(coreService));
app.get('/api/game/:gameId/unit/:x/:y/moves', getMovesForUnitFromGameApi(coreService));

app.get('/api', (req, res) => {
  const apis = [];
  res.send(apis);
});

app.get('/', (req, res) => {
   const paths = [];
   res.send(paths);
 });

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port} for input.`);
});
