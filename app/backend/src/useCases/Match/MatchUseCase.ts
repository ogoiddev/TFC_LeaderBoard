import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import Match from '../../entities/Match';
import ErrorType from '../../utils/error/errorConstructor';

class MatchUseCase {
  constructor(private matches: IMatchRepository) { }

  async queryAll(): Promise<Match[] | []> {
    const matches = await this.matches.getAll();
    return matches;
  }

  async queryById(id: number): Promise<Match> {
    const match = await this.matches.getById(id);
    if (!match) throw new ErrorType(400, 'Match not found');
    return match;
  }
}

export default MatchUseCase;
