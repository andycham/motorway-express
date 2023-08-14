const addLog = require("../utils/logger");

var redis = require('redis');

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
addLog("debug", "REDIS_URL=" + REDIS_URL);
const redisClient = redis.createClient({ url: REDIS_URL });
addLog("debug", "Redis connnecting");
redisClient.connect().catch( (err) => {
  addLog("error", "Error " + err);
}); 
redisClient.on("error", (err) => {
  addLog("error", "Redis Error " + err);
});
redisClient.on("connect", () => {
  addLog("debug", "Redis connected.");
}) 
module.exports = redisClient;