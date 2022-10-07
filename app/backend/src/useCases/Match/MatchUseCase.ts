import MatchModel from '../../database/models/MatchModel';
import { IMatchRepository } from '../../repositories/IMatchRepository';
import ErrorType from '../../utils/error/errorConstructor';
import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from './MatchUseCaseDTO';
import ValidateToSave from './validations/ValidateToSave';

export default class MatchUseCase {
  constructor(private matches: IMatchRepository) { }

  async getAllWithTeamName(): Promise<MatchModel[] | []> {
    const matches = await this.matches.getAllWithTeamName();

    return matches;
  }

  async getByStatusWithTeamName(status: boolean): Promise<MatchModel[] | []> {
    const matches = await this.matches.getByStatusWithTeamName(status);

    return matches;
  }

  async getById(id: number): Promise<MatchModel> {
    const match = await this.matches.getById(id);

    if (!match) throw new ErrorType(400, 'Match not found');

    return match;
  }

  async saveNewMatch(match: IMatchToSaveDTO): Promise<MatchModel> {
    ValidateToSave.check(match);

    const newMatch = await this.matches.saveNewMatch(match);

    return newMatch;
  }

  async updateMatchStatus(id: number): Promise<void> {
    await this.matches.updateMatchStatus(id);
  }

  async updateMatchScore(score: IMatchUpdateScoreDTO, id: number): Promise<void> {
    await this.matches.updateMatchScore(score, id);
  }
}
