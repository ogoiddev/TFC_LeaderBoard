import { ITableTeamResults } from '../../entities/interfaces/ITableTeamResults';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import TeamRepository from '../../repositories/TeamRepository';
import MatchCalcs from './services/MatchCalcs';
import SortBoardByRules from './services/SortBoardByRulesUseCase';

export default class HomeLeaderBoardUseCase {
  constructor(
    private matches: IMatchRepository,
    private teams = new TeamRepository(),
  ) { }

  async fillLeaderBoard(): Promise<ITableTeamResults[]> {
    const allMatches = await this.matches.getAllFinished();
    const allTeams = await this.teams.getAll();

    const teamResults = allTeams.map((each) => MatchCalcs.fullCalcs(allMatches, each));

    const leaderBoardSorted = SortBoardByRules.sort(teamResults);

    return leaderBoardSorted;
  }
}
