import MatchModel from '../../database/models/MatchModel';
import { IMatch } from '../../entities/interfaces/IMatch';
import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from '../../useCases/Match/MatchUseCaseDTO';

export interface IMatchRepository {
  getAll(): Promise<IMatch[] | []>;
  getAllFinished(): Promise<IMatch[] | []>;
  getById(id: number): Promise<IMatch | null>;

  saveNewMatch(match: IMatchToSaveDTO): Promise<MatchModel>;
  updateMatchStatus(id: number): Promise<void>;
  updateMatchScore(score: IMatchUpdateScoreDTO, id: number): Promise<void>;
}
