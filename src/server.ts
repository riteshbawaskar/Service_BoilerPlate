
import Fastify from 'fastify';
import { sequelizePlugin } from './plugins/sequelize.js';
import { actionRoutes } from './routes/action.routes.js';

const server = Fastify({ logger: true });

server.register(sequelizePlugin);
server.register(actionRoutes);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});