// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Autenticação',
      version: '1.0.0',
      description: 'Documentação da API de autenticação usando JWT e MySQL',
    },
    servers: [
      {
        url: 'http://localhost:3001', // URL base da API
      },
    ],
  },
  apis: ['./app.js'], // caminho para os arquivos que contêm a documentação
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
