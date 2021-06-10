import { Connection, createConnection } from "typeorm";
import { Singleton } from "../ioc/scopes";

@Singleton(GerenciadorConexao)
export class GerenciadorConexao {
  private connection: Connection | null;
  constructor() {
    this.connection = null;
  }
  async obterConexao(): Promise<Connection> {
    if (this.connection === null) {
      return new Promise((resolve, reject) => {
        createConnection({
          type: "mysql",
          host: "localhost",
          port: 3306,
          username: "root",
          password: "root",
          database: "adventureworks",
          entities: [
            __dirname +
              "/entidades/" +
              (process.env.NODE_ENV === "production" ? "*.js" : "*.ts"),
          ],
        })
          .then((connection) => {
            this.connection = connection;
            resolve(connection);
          })
          .catch((error) => reject(error));
      });
    } else {
      return this.connection;
    }
  }
}
