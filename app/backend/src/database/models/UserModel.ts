import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IUser } from '../../entities/interfaces/IUser';

class UserModel extends Model implements IUser {
  id: string;
  username: string;
  role: string;
  email: string;
  password: string;
}

UserModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  username: DataTypes.STRING,
  role: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,

}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default UserModel;
