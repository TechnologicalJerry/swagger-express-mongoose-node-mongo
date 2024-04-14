import express, { Request, Response } from "express";
import config from "config";
import connect from "./utilitys/connectDb";
import routes from "./routes";
import swaggerDocs from "./utilitys/swagger";
import dotenv from "dotenv";

dotenv.config();

const server = express();

const PORT = config.get<number>("port");

server.use(express.json());

server.listen(PORT, async () => {
  console.log(`Server is running!!!!!!!! on PORT = ${PORT}`);
  await connect();
  routes(server);
  swaggerDocs(server, PORT);
});
