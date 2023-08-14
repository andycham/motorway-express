const express = require('express');
const addLog = require("./utils/logger");
const checkCache = require("./middleware/checkCache");
const app = express();
const PORT = process.env.APP_PORT||3000;
const homeController = require('./controllers/homeController');
const vehicleController = require('./controllers/vehicleController');

app.get('/', homeController.home);
app.get('/vehicle/:id/:time', checkCache, vehicleController.getVehicles);

app.listen(PORT, () => {  
  addLog("info", `Motorway Takehome Backend (` + process.env.NODE_ENV + `) listening on port ${PORT}`);
})