import MatchModel from '../database/models/MatchModel';
import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from '../useCases/Match/MatchUseCaseDTO';

export interface IMatchRepository {
  getAllWithTeamName(): Promise<MatchModel[] | []>;
  getByStatusWithTeamName(status: boolean): Promise<MatchModel[] | []>;

  getAllFinished(): Promise<MatchModel[] | []>
  getById(id: number): Promise<MatchModel | null>;

  saveNewMatch(match: IMatchToSaveDTO): Promise<MatchModel>;
  updateMatchStatus(id: number): Promise<void>;
  updateMatchScore(score: IMatchUpdateScoreDTO, id: number): Promise<void>;
}
