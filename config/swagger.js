// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    // // Add inside "definition" object
    // components: {
    //   securitySchemes: {
    //     bearerAuth: {
    //       type: "http",
    //       scheme: "bearer",
    //       bearerFormat: "JWT",
    //     },
    //   },
    // },
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
    openapi: "3.0.0",
    info: {
      title: "Your API Name",
      version: "1.0.0",
      description: "API documentation for your Express + MongoDB app",
    },
    servers: [
      {
        url: "http://localhost:5000", // change if deploying
      },
    ],
  },
  apis: ["../config/*.js"], // path to your route files
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
