const express = require("express");

const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>home page<h1/>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Caio",
      idade: 21
    },
    {
      name: "Gustavo",
      idade: 32
    }
  ];

  res.status(200).json(users);
});

app.listen(port, () => console.log(`rodando na porta ${port}`));