const {pool, esc} = require('../utils/db')

const home = (req, res) => {
  res.status(200).send('Motorway Takehome Backend');
}

module.exports = {
  home
}