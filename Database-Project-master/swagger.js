var _a, _b, _c;
var swaggerAutogen = require('swagger-autogen')();
var doc = {
    info: {
        title: 'SnackAPI',
        description: 'An api for getting snacks',
    },
    host: (_a = process.env.SWAGGER_HOST) !== null && _a !== void 0 ? _a : "localhost:".concat((_b = process.env.PORT) !== null && _b !== void 0 ? _b : 3001),
    schemes: (_c = process.env.SWAGGER_SCHEMES) !== null && _c !== void 0 ? _c : ["http"],
    // host: 'localhost:3001',
    // schemes: ['http'],
};
var outputFile = './swagger.json';
var endpointsFiles = ['./routes/index.js'];
// generate swagger.json
// ...
swaggerAutogen(outputFile, endpointsFiles, doc);
// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
