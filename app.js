require('dotenv').config();

const express = require('express')
const addLog = require("./utils/logger");
const app = express()
const port = process.env.APP_PORT||3000

const homeController = require('./controllers/homeController');
const vehicleController = require('./controllers/vehicleController');

app.get('/', homeController.home);
app.get('/vehicle/:id/:time', vehicleController.getVehicles);


app.listen(port, () => {  
  addLog("info", `Motorway Takehome Backend (` + process.env.NODE_ENV + `) listening on port ${port}`);
})