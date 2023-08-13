require('dotenv').config();
const winston = require("winston");

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp}\t${level}\t${message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL||"info",
  format: winston.format.combine(winston.format.timestamp(), customFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "./logs/access.log", level: "info" })
  ],
});

const addLog = (level, message, req) => {
  if(req){
    logger.log(level, message + "\t" + req.ip + "\t" + req.url);
  } else {
    logger.log(level, message + "\t\t");
  }  
}

module.exports = addLog;