import { ILeaderBoard } from '../../entities/interfaces/ILeaderBoard';
import LeaderBoard from '../../entities/LeaderBoard';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';

export default class HomeLeaderBoardUseCase extends LeaderBoard {
  constructor(private matches: IMatchRepository, private tableTeamFilled: ILeaderBoard) {
    super(tableTeamFilled);
  }

  async fillBoard() {
    const allMatches = await this.matches.getAll();
    const finishedMatches = allMatches.filter(({ inProgress }) => !inProgress);
    return finishedMatches;
  }
}
