import MatchController from '../useCases/Match/MatchController';
import LoginController from '../useCases/LoginUser/LoginController';
import TeamController from '../useCases/Team/TeamController';
import Login from './Login';
import Match from './Match';
import Team from './Teams';

export const toLogin = new Login().make() as LoginController;
export const toTeams = new Team().make() as TeamController;
export const toMatches = new Match().make() as MatchController;
