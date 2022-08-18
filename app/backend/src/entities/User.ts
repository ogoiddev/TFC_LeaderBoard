import { uuid } from 'uuidv4';
import { IUser } from './interfaces/IUser';

class User implements IUser {
  public readonly id: string;

  public username: string;
  public role: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export default User;
