import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API fs47',
      version: '1.0.0',
      description: 'Um exemplo de documentação de API com swagger-jsdoc',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local server' }
    ],
  },
  apis: ['./src/routes/*.js', './src/docs/*.js'], // Path to files with JSDoc comments
};

export const swaggerSpec = swaggerJsdoc(options);

