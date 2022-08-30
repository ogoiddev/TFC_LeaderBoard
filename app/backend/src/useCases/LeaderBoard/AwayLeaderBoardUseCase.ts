import { ITeam } from '../../entities/interfaces/ITeam';
import { IMatch } from '../../entities/interfaces/IMatch';
import { ITableTeamResults } from '../../entities/interfaces/ITableTeamResults';
import MatchRepository from '../../repositories/implementations/MatchRepository';
import TeamRepository from '../../repositories/implementations/TeamRepository';
import MatchCalcs from './services/MatchCalcs';
import SortBoardByRulesUseCase from './services/SortBoardByRulesUseCase';

export default class AwayLeaderBoardUseCase {
  private matchesFor = new MatchRepository();
  private teams = new TeamRepository();

  async fillLeaderBoard(): Promise<ITableTeamResults[]> {
    const allMatches = await this.matchesFor.getAllFinished() as IMatch[];
    const allTeams = await this.teams.getAll() as ITeam[];

    const teamResults = allTeams.map((each) => MatchCalcs.awayCalcs(allMatches, each));

    const leaderBoardSorted = SortBoardByRulesUseCase.sort(teamResults);

    return leaderBoardSorted;
  }
}
