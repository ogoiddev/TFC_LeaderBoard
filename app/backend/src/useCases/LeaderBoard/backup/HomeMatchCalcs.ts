import { ITeam } from '../../../entities/interfaces/ITeam';
import { IMatch } from '../../../entities/interfaces/IMatch';
import TableTeamInfo from '../../../entities/TableTeamInfo';

export default class HomeMatchCalcs {
  static calc(allMatches: IMatch[], each: ITeam) {
    const team = new TableTeamInfo(each.teamName);
    allMatches.forEach((match) => {
      if (each.id === match.homeTeam) {
        team.addNewMatch({
          win: match.homeTeamGoals > match.awayTeamGoals ? 1 : 0,
          draws: match.homeTeamGoals === match.awayTeamGoals ? 1 : 0,
          lose: match.homeTeamGoals < match.awayTeamGoals ? 1 : 0,
          goals: match.homeTeamGoals,
          goalsOwn: match.awayTeamGoals,
        });
      }
    });

    return team;
  }
}
