import { DataTypes, Model } from 'sequelize';
import db from '.';

class users extends Model {
  email!: string;
  password!: string;
  // static associate(models) {
  //   // define association here
  // }
}
users.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export default users;
