console.log("esto es un error");
const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
});

try {
  // Código que puede generar un error
  throw createError('¡Ha ocurrido un error!');
} catch (error) {
  logger.error(error);
}

