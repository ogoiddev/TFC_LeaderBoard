import HomeLeaderBoardController from '../useCases/LeaderBoard/HomeLeaderBoardController';
import LoginController from '../useCases/LoginUser/LoginController';
import MatchController from '../useCases/Match/MatchController';
import TeamController from '../useCases/Team/TeamController';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Match from './Match';
import Team from './Teams';

export const toLogin = new Login().make() as LoginController;
export const toTeams = new Team().make() as TeamController;
export const toMatches = new Match().make() as MatchController;
export const toLeaderBoard = new LeaderBoard().make() as HomeLeaderBoardController;
