import { ILeaderBoard } from '../../entities/interfaces/ILeaderBoard';
import LeaderBoard from '../../entities/LeaderBoard';
import { IMatchUseCase } from '../Match/interfaces/IMatchUseCase';

export default class HomeLeaderBoard extends LeaderBoard {
  constructor(private matches: IMatchUseCase, private tableTeamFilled: ILeaderBoard) {
    super(tableTeamFilled);
  }

  async fillBoard() {
    const allMatches = await this.matches.getAll();
    const finishedMatches = allMatches.filter(({ inProgress }) => inProgress);
    console.log(finishedMatches);
  }
}
