global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");
const express = require("express");
const cors = require("cors");
const taskController = require("./controllers-layer/tasks-controller");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", taskController);

server.listen(3001, () => console.log("Listening.."));