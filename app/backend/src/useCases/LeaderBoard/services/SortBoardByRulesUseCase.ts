import { ITableTeamResults } from '../../../entities/interfaces/ITableTeamResults';

export default class SortBoardByRulesUseCase {
  static sort(list: ITableTeamResults[]) {
    const sorted = list.sort((b, a) => (
      a.totalPoints - b.totalPoints
    || a.totalVictories - b.totalVictories
    || a.goalsBalance - b.goalsBalance
    || a.goalsFavor - b.goalsFavor
    || b.goalsOwn - a.goalsOwn
    ));
    return sorted;
  }
}

// regas de desempate => 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
