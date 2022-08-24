import { ILeaderBoard } from '../../../entities/interfaces/ILeaderBoard';

export interface IHomeLeaderBoardUseCase {
  fillBoard(): Promise<ILeaderBoard[] | []>;
}
