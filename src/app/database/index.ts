import { Connection, createConnection } from "typeorm";

export default async function gerarConexao(): Promise<Connection> {
  return new Promise((resolve, reject) => {
    console.log(__dirname);
    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "adventureworks",
      entities: [__dirname + "/entidades/*.ts"],
    })
      .then((connection) => {
        resolve(connection);
      })
      .catch((error) => reject(error));
  });
}
