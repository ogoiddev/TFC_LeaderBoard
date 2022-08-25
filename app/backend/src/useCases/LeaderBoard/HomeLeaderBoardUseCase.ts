import { ITableTeamResults } from '../../entities/interfaces/ITableTeamResults';
import { IMatch } from '../../entities/interfaces/IMatch';
import { ITeam } from '../../entities/interfaces/ITeam';
import TableTeamResults from '../../entities/TableTeamResults';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import TeamRepository from '../../repositories/TeamRepository';
import SortBoardByRules from './SortBoardByRulesUseCase';

export default class HomeLeaderBoardUseCase {
  constructor(
    private matches: IMatchRepository,
    private teams = new TeamRepository(),
  ) { }

  static calcValues(allTeams: ITeam[], allMatches: IMatch[]) {
    return allTeams.map((each) => {
      const team = new TableTeamResults(each.teamName);

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
    });
  }

  async fillLeaderBoard(): Promise<ITableTeamResults[]> {
    const allMatches = await this.matches.getAllFinished();
    const allTeams = await this.teams.getAll();
    const results: ITableTeamResults[] = HomeLeaderBoardUseCase.calcValues(allTeams, allMatches);

    const leaderBoardSorted = SortBoardByRules.sort(results);

    return leaderBoardSorted;
  }
}

// regas de desempate => 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
