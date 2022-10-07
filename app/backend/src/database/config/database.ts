import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'VL8OUyFnqVTdNXMzwSd4',
  database: 'TRYBE_FUTEBOL_CLUBE' || 'railway',
  host: process.env.DB_HOST || 'containers-us-west-80.railway.app',
  port: Number(process.env.DB_PORT) || 5852,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
