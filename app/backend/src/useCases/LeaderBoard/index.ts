import AwayLeaderBoardUseCase from './AwayLeaderBoardUseCase';
import FullLeaderBoardUseCase from './FullLeaderBoardUseCase';
import HomeLeaderBoardUseCase from './HomeLeaderBoardUseCase';
import LeaderBoardController from './LeaderBoardController';

const homeBoard = new HomeLeaderBoardUseCase();
const awayBoard = new AwayLeaderBoardUseCase();
const fullBoard = new FullLeaderBoardUseCase();

const leaderBoardController = new LeaderBoardController(fullBoard, homeBoard, awayBoard);

export default leaderBoardController;
