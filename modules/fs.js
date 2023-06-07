const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//   if(error){
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo: cuidado para nao sobrescrever um arquivo existente
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'salve galera', (error) => {
  if(error){
    return console.log("Erro: ", error);
  }

  console.log("Arquivo criado com sucesso!");
});

// Adicionar em um arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello world!', (error) => {
  if(error){
    return console.log("Erro: ", error);
  }

  console.log("Arquivo modificado com sucesso!");
});

