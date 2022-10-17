import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/ms';

export interface PhraseModel extends Model {
  id: number;
  author: string;
  txt: string;
}

export const Phrase = sequelize.define<PhraseModel>(
  'Phrase',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    auhor: {
      type: DataTypes.STRING,
    },
    txt: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'phrases',
    timestamps: false,
  }
);
