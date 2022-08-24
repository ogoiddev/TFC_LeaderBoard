import MatchModel from '../../database/models/MatchModel';
import Match from '../../entities/Match';
import { IMatchUpdateScoreDTO, IMatchToSaveDTO } from '../../useCases/Match/MatchUseCaseDTO';

export interface IMatchRepository {
  getAll(): Promise<Match[] | []>;
  getAllFinished(): Promise<Match[] | []>;
  getById(id: number): Promise<Match | null>;

  saveNewMatch(match: IMatchToSaveDTO): Promise<MatchModel>;
  updateMatchStatus(id: number): Promise<void>;
  updateMatchScore(score: IMatchUpdateScoreDTO, id: number): Promise<void>;
}
