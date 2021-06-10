import { inject, injectable } from "inversify";
import { GerenciadorConexao } from "../database";
import { Connection, EntityTarget, Repository } from "typeorm";

@injectable()
export abstract class BaseServico {
  constructor(
    @inject(GerenciadorConexao) private gerenciadorConexao: GerenciadorConexao
  ) {}

  public async obterRepositorio<Entity>(
    target: EntityTarget<Entity>
  ): Promise<Repository<Entity>> {
    let conn = await this.gerenciadorConexao.obterConexao();
    return conn.getRepository(target);
  }

  public async obterConexao(): Promise<Connection> {
    return await this.gerenciadorConexao.obterConexao();
  }
}
