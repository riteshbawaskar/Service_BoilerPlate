import { DataTypes, Model } from 'sequelize';
export class Action extends Model {
}
export function initActionModel(sequelize) {
    Action.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        type: { type: DataTypes.STRING, allowNull: false },
        payload: { type: DataTypes.JSONB, allowNull: false },
    }, {
        sequelize,
        modelName: 'Action',
        tableName: 'actions',
        timestamps: true,
    });
}
