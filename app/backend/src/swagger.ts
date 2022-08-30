// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './src/routes/index.ts',
];

swaggerAutogen(outputFile, endpointsFiles);
