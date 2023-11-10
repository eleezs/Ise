const dotenv = require('dotenv');

dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const config = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT || 5432,
    "dialect": "postgres",
    "dialectOptions": {
      // "ssl": {
      //   "require": true,
      //   "rejectUnauthorized": false
      // }
    },
    "logging": false,
    "seederStorage": "sequelize",
    "timezone": "+01:00",
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT || 5432,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    },
    "logging": false,
    "seederStorage": "sequelize",
    "timezone": "+01:00",
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT || 5432,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    },
    "seederStorage": "sequelize",
    "timezone": "+01:00",
  }
}

module.exports = config;
