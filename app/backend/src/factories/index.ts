import HomeLeaderBoardController from '../useCases/LeaderBoard/LeaderBoardController';
import LoginController from '../useCases/LoginUser/LoginController';
import MatchController from '../useCases/Match/MatchController';
import TeamController from '../useCases/Team/TeamController';
import AwayLeaderBoard from './AwayLeaderBoardFactory';
import FullLeaderBoard from './FullLeaderBoardFactory';
import HomeLeaderBoard from './HomeLeaderBoard';
import Login from './Login';
import Match from './Match';
import Team from './Teams';

export const toLogin = new Login().make() as LoginController;
export const toTeams = new Team().make() as TeamController;
export const toMatches = new Match().make() as MatchController;
export const toHomeLeaderBoard = new HomeLeaderBoard().make() as HomeLeaderBoardController;
export const toAwayLeaderBoard = new AwayLeaderBoard().make() as HomeLeaderBoardController;
export const toFullLeaderBoard = new FullLeaderBoard().make() as HomeLeaderBoardController;
