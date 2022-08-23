import ErrorType from '../../../utils/error/errorConstructor';
import { IMatchUseCaseDTO } from '../MatchUseCaseDTO';

export default class ValidateToSave {
  static check(match: IMatchUseCaseDTO) {
    if (match.homeTeam === match.awayTeam) {
      throw new ErrorType(401, 'It is not possible to create a match with two equal teams');
    }
  }
}
