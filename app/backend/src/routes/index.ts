import * as express from 'express';
import LoginRouter from './loginRoute';
import TeamRouter from './teamRoute';

const Routes = express.Router();

Routes.use(LoginRouter);
Routes.use(TeamRouter);

export default Routes;
