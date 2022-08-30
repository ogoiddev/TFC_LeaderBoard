import { IMatch } from '../../../entities/interfaces/IMatch';
import { ITeam } from '../../../entities/interfaces/ITeam';
import TableTeamInfo from '../../../entities/TableTeamInfo';

export default class MatchCalcs {
  static homeCalcResults(team: TableTeamInfo, match: IMatch) {
    team.addNewMatch({
      win: match.homeTeamGoals > match.awayTeamGoals ? 1 : 0,
      draws: match.homeTeamGoals === match.awayTeamGoals ? 1 : 0,
      lose: match.homeTeamGoals < match.awayTeamGoals ? 1 : 0,
      goals: match.homeTeamGoals,
      goalsOwn: match.awayTeamGoals,
    });
  }

  static awayCalcResults(team: TableTeamInfo, match: IMatch) {
    team.addNewMatch({
      win: match.awayTeamGoals > match.homeTeamGoals ? 1 : 0,
      draws: match.awayTeamGoals === match.homeTeamGoals ? 1 : 0,
      lose: match.awayTeamGoals < match.homeTeamGoals ? 1 : 0,
      goals: match.awayTeamGoals,
      goalsOwn: match.homeTeamGoals,
    });
  }

  static homeCalcs(allMatches: IMatch[], each: ITeam) {
    const team = new TableTeamInfo(each.teamName);
    allMatches.forEach((match) => {
      if (each.id === match.homeTeam) {
        this.homeCalcResults(team, match);
      }
    });

    return team;
  }

  static awayCalcs(allMatches: IMatch[], each: ITeam) {
    const team = new TableTeamInfo(each.teamName);
    allMatches.forEach((match) => {
      if (each.id === match.awayTeam) {
        this.awayCalcResults(team, match);
      }
    });

    return team;
  }

  static fullCalcs(allMatches: IMatch[], each: ITeam) {
    const team = new TableTeamInfo(each.teamName);
    allMatches.forEach((match) => {
      if (each.id === match.homeTeam) {
        this.homeCalcResults(team, match);
      }
      if (each.id === match.awayTeam) {
        this.awayCalcResults(team, match);
      }
    });

    return team;
  }
}
