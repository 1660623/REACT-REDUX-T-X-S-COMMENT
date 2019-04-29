const Sequelize = require('sequelize');
const db = new  Sequelize(process.env.DATABASE_URL || 'postgres://postgres:root@127.0.0.1:9999/postgres');
module.exports = db;