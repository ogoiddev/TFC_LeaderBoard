import { App } from './app';
import 'dotenv/config';

const PORT = process.env.MYSQLPORT || 3001;

new App().start(PORT);
