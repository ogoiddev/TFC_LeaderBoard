import MatchModel from '../../database/models/MatchModel';
import Match from '../../entities/Match';
import { IMatchUseCaseDTO } from '../../useCases/Match/MatchUseCaseDTO';

export interface IMatchRepository {
  getAll(): Promise<Match[] | []>;
  getById(id: number): Promise<Match | null>;

  saveNewMatch(match: IMatchUseCaseDTO): Promise<MatchModel>;
  updateMatchStatus(id: number): Promise<void>;
}
