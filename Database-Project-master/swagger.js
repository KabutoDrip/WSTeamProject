const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Project API',
  },
  host: process.env.SWAGGER_HOST ?? `localhost:${process.env.PORT ?? 3001}`,
  schemes: process.env.SWAGGER_SCHEMES ?? ["http"],
  // host: 'localhost:3001',
  // schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
// ...
swaggerAutogen(outputFile, endpointsFiles, doc);
// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });