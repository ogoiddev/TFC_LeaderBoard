import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import Match from '../../entities/Match';
import ErrorType from '../../utils/error/errorConstructor';
import { IMatchUseCaseDTO } from './MatchUseCaseDTO';
import { IMatchUseCase } from './interfaces/IMatchUseCase';
import MatchModel from '../../database/models/MatchModel';

class MatchUseCase implements IMatchUseCase {
  constructor(private matches: IMatchRepository) { }

  async getAll(): Promise<Match[] | []> {
    const matches = await this.matches.getAll();
    return matches;
  }

  async getById(id: number): Promise<Match> {
    const match = await this.matches.getById(id);
    if (!match) throw new ErrorType(400, 'Match not found');
    return match;
  }

  async saveNewMatch(match: IMatchUseCaseDTO): Promise<MatchModel> {
    const newMatch = await this.matches.saveNewMatch(match);
    return newMatch;
  }

  async updateMatchStatus(id: number): Promise<void> {
    await this.matches.updateMatchStatus(id);
  }
}

export default MatchUseCase;
