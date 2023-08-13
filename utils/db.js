require('dotenv').config();
const addLog = require("../utils/logger");
const Pool = require('pg').Pool
var pool;
try {
  pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT||5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
} catch(e) {
  addLog('error', e);
}

function esc(value){
  var newValue = '';
  if(value){
    newValue = value.toString().replace(/'/g, "''");
  } else {
    newValue = '';
  }
  return newValue;
}

module.exports = {
    pool,
    esc
};
