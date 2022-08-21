import Matches from '../../entities/Match';

export interface IMatchRepository {
  getAll(): Promise<Matches[] | []>;
  getById(id: number): Promise<Matches | null>
}
