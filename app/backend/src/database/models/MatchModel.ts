import { DataTypes, Model } from 'sequelize';
import db from '.';
import Match from '../../entities/Match';
import TeamModel from './TeamModel';

class MatchModel extends Model<Match> { }

MatchModel.init({
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

MatchModel.belongsTo(TeamModel, {
  as: 'teamHome',
  foreignKey: 'homeTeam',
});

MatchModel.belongsTo(TeamModel, {
  as: 'teamAway',
  foreignKey: 'awayTeam',
});

TeamModel.hasMany(MatchModel, {
  as: 'matchHome',
  foreignKey: 'homeTeam',
});

TeamModel.hasMany(MatchModel, {
  as: 'matchAway',
  foreignKey: 'awayTeam',
});

export default MatchModel;
