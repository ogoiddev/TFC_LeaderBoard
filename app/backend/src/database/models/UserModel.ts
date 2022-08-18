import { DataTypes, Model } from 'sequelize';
import db from '.';

class UserModel extends Model {
  // id: string
  // username: string,
  // role: string,
  // email!: string;
  // password!: string;

  // static associate(models) {
  // User: Association<UserInfoData>
  // }
}
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
