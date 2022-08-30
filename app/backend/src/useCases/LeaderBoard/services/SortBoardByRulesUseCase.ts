import { ITableTeamResults } from '../../../entities/interfaces/ITableTeamResults';

export default class SortBoardByRulesUseCase {
  static sort(list: ITableTeamResults[]) {
    const sorted = list.sort((b, a) => b.goalsOwn - a.goalsOwn)
      .sort((b, a) => a.goalsFavor - b.goalsFavor)
      .sort((b, a) => a.goalsBalance - b.goalsBalance)
      .sort((b, a) => a.totalVictories - b.totalVictories)
      .sort((b, a) => a.totalPoints - b.totalPoints);
    return sorted;
  }
}

// regas de desempate => 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
