const mysql = require("mysql");
const isProduction = process.env.NODE_ENV === 'production'

const poolConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'facebook',
}

// ADD MySQL sock path in production
if(isProduction){
  poolConfig.socketPath = '/var/run/mysqld/mysqld.sock'
}

const pool = mysql.createPool(poolConfig);

const query = (query, parameter) => {
  return new Promise((resolve, reject) => {
    pool.query(query, parameter, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

module.exports = {
  query,
  pool,
};