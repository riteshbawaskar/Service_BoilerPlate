import fp from 'fastify-plugin';
import { Sequelize } from 'sequelize';
import { getconfig } from '../config.js';
export const sequelizePlugin = fp(async (server) => {
    const config = await getconfig();
    const sequelize = new Sequelize({
        dialect: 'postgres',
        host: config.db.host,
        port: config.db.port,
        username: config.db.username,
        password: config.db.password,
        database: config.db.database,
        logging: false,
    });
});
