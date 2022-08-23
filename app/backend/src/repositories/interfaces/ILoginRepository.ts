import User from '../../entities/User';

export interface ILoginRepository {
  getByEmail(email: string): Promise<User | null | string>;
}
