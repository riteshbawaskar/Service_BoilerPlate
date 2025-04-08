import { initActionModel, Action } from './action.model.js';
export async function initModels(sequelize) {
    initActionModel(sequelize);
    await sequelize.authenticate();
    await sequelize.sync();
}
export { Action };
