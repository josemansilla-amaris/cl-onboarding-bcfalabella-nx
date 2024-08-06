import Fastify from 'fastify';
import { createHealthCheckHandler } from '@interfaces/api/healthcheck';
import { createHelloWorldHandler } from '@interfaces/api/helloword';
import loggerBuilder from '@utils/logger';

const fastify = Fastify({ logger: true });

const healthCheckHandler = createHealthCheckHandler(loggerBuilder);
const helloWordHandler = createHelloWorldHandler(loggerBuilder)

fastify.get('/api/healthcheck', healthCheckHandler);
fastify.get('/api/helloWorld', helloWordHandler);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()