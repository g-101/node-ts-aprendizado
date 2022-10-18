import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/ms';

export interface PhraseModel extends Model {
  id: number;
  author: string;
  text: string;
}

export const Phrase = sequelize.define<PhraseModel>(
  'Phrase',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'phrases',
    timestamps: false,
  }
);
