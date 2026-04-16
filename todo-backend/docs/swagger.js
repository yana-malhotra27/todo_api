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
  basePath: "/api",
  schemes: ["http"],
  definitions: {
    Todo: {
      task: "Buy groceries",
      date: "2026-04-16",
      completed: false,
    },
  },
  tags: [
    {
      name: "Todo",
      description: "Todo APIs",
    },
  ],
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/todoItemsRouter.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);