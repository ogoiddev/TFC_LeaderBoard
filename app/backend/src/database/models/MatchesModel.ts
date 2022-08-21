import { DataTypes, Model } from 'sequelize';
import db from '.';
import Matches from '../../entities/Matches';

class MatchesModel extends Model<Matches> {
  static associate(models: Model) {
    MatchesModel.hasMany(models._attributes, {
      foreignKey: 'homeTeam',
    });
    MatchesModel.hasMany(models._attributes, {
      foreignKey: 'awayTeam',
    });
  }
}

MatchesModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'home_team',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'away_team',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

export default MatchesModel;