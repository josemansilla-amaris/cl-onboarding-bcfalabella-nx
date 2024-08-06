import pino from 'pino';
import pinoPretty from 'pino-pretty';

const logger = pino(
  pinoPretty({
    colorize: true,
    translateTime: 'yyyy-mm-dd HH:MM:ss.l',
    ignore: 'pid,hostname',
  })
);

const loggerBuilder = (
  type: string, 
  filepath: string, 
  message: string
) => {
  const logMessage = `[${filepath}] ${message}`;
  switch (type) {
    case 'info':
      logger.info(logMessage);
      break;
    case 'warn':
      logger.warn(logMessage);
      break;
    case 'error':
      logger.error(logMessage);
      break;
    default:
      logger.info(`[default] ${message}`);
  }
  return logger
} 

export default loggerBuilder;