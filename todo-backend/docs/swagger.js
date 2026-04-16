const options = {
  openapi: "3.0.0",
};

const swaggerAutogen = require("swagger-autogen")(options);

const doc = {
  info: {
    title: "Todo APIs",
    description: "API for Managing Todo",
  },
  host: "localhost:3003",
  schemes: ["http"],
  definitions: {
    Todo: {
      task: "Buy groceries",
      date: "2026-04-16",
      completed: false,
    },
  },
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./app.js", "./routes/todoItemsRouter.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);