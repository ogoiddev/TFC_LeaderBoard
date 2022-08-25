import { IMatchRepository } from '../../../repositories/interfaces/IMatchRepository';
import AwayLeaderBoardUseCase from '../AwayLeaderBoardUseCase';
import HomeLeaderBoardUseCase from '../HomeLeaderBoardUseCase';

export default class FullLeaderBoardUseCase {
  private homeLeaderBoard: HomeLeaderBoardUseCase;
  private awayLeaderBoard: AwayLeaderBoardUseCase;

  constructor(
    private matches: IMatchRepository,
  ) {
    this.homeLeaderBoard = new HomeLeaderBoardUseCase(this.matches);
    this.awayLeaderBoard = new AwayLeaderBoardUseCase(this.matches);
  }

  async fillLeaderBoard() {
    const homeList = await this.homeLeaderBoard.fillLeaderBoard();
    const awayList = await this.awayLeaderBoard.fillLeaderBoard();
    const sortToFiler = [...homeList, ...awayList].sort((a, b) =>
      a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    // const filterToSort = sortToFiler
    //   .filter((each, i, arr) => i > 0 && each.name !== arr[i - 1].name);

    // const fullLeaderBoard = SortBoardUseCase.sort(filterToSort);

    return sortToFiler;
  }
}

// regas de desempate => 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
