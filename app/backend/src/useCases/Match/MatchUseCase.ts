import MatchModel from '../../database/models/MatchModel';
import { IMatch } from '../../entities/interfaces/IMatch';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import ErrorType from '../../utils/error/errorConstructor';
import { IMatchUseCase } from './interfaces/IMatchUseCase';
import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from './MatchUseCaseDTO';
import ValidateToSave from './validations/ValidateToSave';

class MatchUseCase implements IMatchUseCase {
  constructor(private matches: IMatchRepository) { }

  async getAll(): Promise<IMatch[] | []> {
    const matches = await this.matches.getAll();
    return matches;
  }

  async getById(id: number): Promise<IMatch> {
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

export default MatchUseCase;
