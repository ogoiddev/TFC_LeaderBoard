import { DataTypes, Model } from 'sequelize';
import db from '.';
import { ITeam } from '../../entities/interfaces/ITeam';

class TeamModel extends Model implements ITeam {
  id: number;
  teamName: string;
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
