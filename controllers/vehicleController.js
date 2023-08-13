const addLog = require("../utils/logger");
const {pool, esc} = require('../utils/db');

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

const getVehicles = (req, res) => {
  const vehicleId = req.params.id;
  const time = req.params.time;
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
  if(isInt(vehicleId)){
    pool.query(sql, (err, results) => {      
      if(err){
        addLog("error", err, req);
        res.status(400).json({"error":"An error occurred."});
      } else {
        res.status(200).json(results.rows[0]);
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