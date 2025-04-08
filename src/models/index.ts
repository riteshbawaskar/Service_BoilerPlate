import { Sequelize } from 'sequelize';
import { initActionModel, Action } from './action.model.js';

export async function initModels(sequelize: Sequelize) {
  initActionModel(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
}

export { Action };