import { DataTypes, Model } from 'sequelize';
import Team from '../../entities/Team';
import db from '.';

class TeamModel extends Model<Team> { }

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
