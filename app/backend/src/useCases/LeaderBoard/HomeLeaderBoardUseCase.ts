import { IMatch } from '../../entities/interfaces/IMatch';
import { ITeam } from '../../entities/interfaces/ITeam';
import LeaderBoard from '../../entities/LeaderBoard';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import TeamRepository from '../../repositories/TeamRepository';

export default class HomeLeaderBoardUseCase {
  constructor(
    private matches: IMatchRepository,
    private teams = new TeamRepository(),
  ) { }

  static tableList(allTeams: ITeam[], allMatches: IMatch[]) {
    return allTeams.map((each) => {
      const team = new LeaderBoard(each.teamName);
      allMatches.forEach((match) => {
        if (each.id === match.homeTeam) {
          team.addGame({
            win: match.homeTeamGoals > match.awayTeamGoals ? 1 : 0,
            draws: match.homeTeamGoals === match.awayTeamGoals ? 1 : 0,
            lose: match.homeTeamGoals < match.awayTeamGoals ? 1 : 0,
            goals: match.homeTeamGoals,
            goalsOwn: match.awayTeamGoals,
          });
        }
      });
      team.end();
      return team;
    });
  }

  async fillBoard() {
    const allMatches = await this.matches.getAllFinished();
    const allTeams = await this.teams.getAll();
    const tableList = HomeLeaderBoardUseCase.tableList(allTeams, allMatches);
    return tableList;
  }
}
