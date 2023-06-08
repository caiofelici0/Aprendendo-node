// const { Person } = require("./person");
// const person = new Person("Caio");

const dotenv = require("dotenv");
dotenv.config();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");
require("./src/database/connect");