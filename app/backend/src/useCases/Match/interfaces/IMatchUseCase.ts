import { IMatch } from '../../../entities/interfaces/IMatch';
import MatchModel from '../../../database/models/MatchModel';
import Match from '../../../entities/Match';
import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from '../MatchUseCaseDTO';

export interface IMatchUseCase {
  getAll(): Promise<Match[] | []>;
  getById(id: number): Promise<IMatch | null>;

  saveNewMatch(match: IMatchToSaveDTO): Promise<MatchModel>;
  updateMatchStatus(id: number): Promise<void>;
  updateMatchScore(score: IMatchUpdateScoreDTO, id: number): Promise<void>;
}
