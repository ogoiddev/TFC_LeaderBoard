import { ITeam } from '../../../entities/interfaces/ITeam';
import { IMatch } from '../../../entities/interfaces/IMatch';
import TableTeamInfo from '../../../entities/TableTeamInfo';

export default class AwayMatchCalcs {
  static calc(allMatches: IMatch[], each: ITeam) {
    const team = new TableTeamInfo(each.teamName);
    allMatches.forEach((match) => {
      if (each.id === match.awayTeam) {
        team.addNewMatch({
          win: match.awayTeamGoals > match.homeTeamGoals ? 1 : 0,
          draws: match.awayTeamGoals === match.homeTeamGoals ? 1 : 0,
          lose: match.awayTeamGoals < match.homeTeamGoals ? 1 : 0,
          goals: match.awayTeamGoals,
          goalsOwn: match.homeTeamGoals,
        });
      }
    });

    return team;
  }
}
