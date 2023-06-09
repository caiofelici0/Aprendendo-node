const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aprendendonode.yt3d4br.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
 try {
  await mongoose.connect(uri);
  console.log("Sucesso ao conectar com o MongoDB");
 } catch (error) {
  console.log("Erro ao se conectar ao banco", error.mensage);
  process.exit(1);
 }
}

module.exports = connectToDatabase;