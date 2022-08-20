import User from '../../entities/User';

export interface ILoginUserRepository {
  getByEmail(email: string): Promise<User | null>;
}
