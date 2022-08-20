import { DataTypes, Model } from 'sequelize';
import db from '.';

class TeamModel extends Model {
  declare id: string;
  declare teamName: string;

  // static associate(models) {
  // User: Association<UserInfoData>
  // }
}
TeamModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  teamName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'team_name',
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default TeamModel;