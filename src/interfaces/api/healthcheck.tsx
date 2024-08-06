
import type { FastifyRequest, FastifyReply } from 'fastify';
import { HealthCheckService } from '@application/services/healthCheckServices';

export function createHealthCheckHandler(loggerBuilder: any) {
  const healthCheckService = new HealthCheckService();

  return async function healthCheckHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
      loggerBuilder(
        'info',
        'src/interfaces/api',
        'Health check request received'
      );
      const status = await healthCheckService.check(loggerBuilder);
      reply.send({ status });
    } catch (error) {
      loggerBuilder(
        'error',
        'src/interfaces/api',
        `Error occurred during health check ${error}`
      );
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  };
}
