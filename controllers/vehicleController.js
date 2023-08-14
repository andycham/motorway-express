const addLog = require("../utils/logger");
const {pool, esc} = require('../utils/db');
const redisClient = require("../utils/redisClient");

const CACHE_SECONDS = process.env.CACHE_SECONDS||60;


function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

// Retrieves vehicle information and state for specified vehicle id and time.
const getVehicles = (req, res) => {
  const vehicleId = req.params.id;  
  const { time } = req.params;

  if(isInt(vehicleId)){
    const redisKey = vehicleId + '-' + time;         
    const sql = `
      SELECT v.id, v.make, v.model, s.state
      FROM vehicles AS v
      INNER JOIN "stateLogs" AS s ON v.id = s."vehicleId"
      WHERE id = '` +  esc(vehicleId) + `'
      AND s.timestamp <= '` +  esc(time) + `'
      ORDER BY s.timestamp DESC
      LIMIT 1
    `;
    addLog("debug","SQL=" + sql, req);
  
    pool.query(sql, (err, results) => {      
      if(err){
        addLog("error", err, req);
        res.status(400).json({"error":"An error occurred."});
      } else {
        res.set('Cache-Control', 'public, max-age=60')

        const data = results.rows[0];

        res.status(200).json(data);
       
        // Store data in Redis
        try {
          addLog("debug","Storing in Redis: Name = " + vehicleId + '-' + time + '; Value = ' + JSON.stringify(data), req);
          redisClient.set(redisKey, JSON.stringify(data) , { EX: CACHE_SECONDS, NX: true });          
        } catch(err) {
          // Just log error - don't report Redis error to user
          addLog("error", err, req);          
        }        
      }
    })
  } else {
    res.status(400).json({"error":"Invalid Id"});
    addLog("error","Invalid Vehicle Id.", req);
  }
}

module.exports = {
  getVehicles
}