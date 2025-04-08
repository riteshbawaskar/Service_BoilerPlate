import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class Action extends Model {
  declare id: CreationOptional<number>;
  declare type: string;
  declare payload: object;
}

export function initActionModel(sequelize: Sequelize) {
  Action.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      type: { type: DataTypes.STRING, allowNull: false },
      payload: { type: DataTypes.JSONB, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Action',
      tableName: 'actions',
      timestamps: true,
    }
  );
}