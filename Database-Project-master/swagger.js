const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Project API',
  },
  host: 'cse341-cbjm.onrender.com',
  schemes: ['https'],
  // host: 'localhost:3001',
  // schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
// ...
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js'); // Your project's root file
  });
// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });