const addLog = require("../utils/logger");
const redisClient = require("../utils/redisClient");

const checkCache = async (req, res, next) => {
  const vehicleId = req.params.id;  
  const { time } = req.params;
  const redisKey = vehicleId + '-' + time;    
  // First Check Cache
  addLog("debug", "Checking cache.");
  var data = await redisClient.get(redisKey);
  addLog("debug", "Cache data=" + data);
  if(data){
    addLog("debug", "Retrieved data from cache.");
    res.status(200).json(JSON.parse(data));
  } else {
    next();
  }
}

module.exports = checkCache;