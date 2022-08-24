import { ITableTeamResults } from '../../../entities/interfaces/ITableTeamResults';

export interface IHomeLeaderBoardUseCase {
  fillLeaderBoard(): Promise<ITableTeamResults[] | []>;
}
