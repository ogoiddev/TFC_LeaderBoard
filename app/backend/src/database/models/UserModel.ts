import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IUser } from '../../entities/interfaces/IUser';

class UserModel extends Model<IUser> {}

UserModel.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default UserModel;
