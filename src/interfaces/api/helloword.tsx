import type { FastifyRequest, FastifyReply } from 'fastify';
import { HelloWorldService } from '@application/services/helloWorldServices';

export function createHelloWorldHandler(loggerBuilder: any) {
  const helloWorldService = new HelloWorldService();

  return async function helloWorldHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
      loggerBuilder(
        'info',
        'src/interfaces/api',
        'Health check request received'
      );
      const result = await helloWorldService.helloworld(loggerBuilder);
      reply.send(result);
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
