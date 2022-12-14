import { ITableTeamResults } from '../../entities/interfaces/ITableTeamResults';
import MatchRepository from '../../repositories/implementations/MatchRepository';
import TeamRepository from '../../repositories/implementations/TeamRepository';
import MatchCalcs from './services/MatchCalcs';
import SortBoardByRulesUseCase from './services/SortBoardByRulesUseCase';

export default class FullLeaderBoardUseCase {
  private matchesFor = new MatchRepository();
  private teams = new TeamRepository();

  async fillLeaderBoard(): Promise<ITableTeamResults[]> {
    const allMatches = await this.matchesFor.getAllFinished();
    const allTeams = await this.teams.getAll();

    const teamResults = allTeams.map((each) => MatchCalcs.fullCalcs(allMatches, each));

    const leaderBoardSorted = SortBoardByRulesUseCase.sort(teamResults);

    return leaderBoardSorted;
  }
}
