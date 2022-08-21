import { uuid } from 'uuidv4';
import { IUser } from './interfaces/IUser';

class User implements IUser {
  readonly id: string;
  username: string;
  role: string;
  email: string;
  password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export default User;
