// src/users/usersService.ts
import { inject, injectable } from "inversify";
import { GerenciadorConexao } from "../app/database";
import { Employee } from "../app/database/entidades/Employee";
import { Usuario, ParametrosCriacaoUsuario } from "./usuario";

@injectable()
export class UsuarioServico {
  constructor(
    @inject(GerenciadorConexao) private gerenciadorConexao: GerenciadorConexao
  ) {}
  /**
   * Pesquisa um usuário por id
   * @param _id Identificador do usuário
   * @param _nome Nome do usuário
   * @returns Resposta no padrão da Api com usuario
   */
  public async obter(
    _id: number,
    _nome?: string
  ): Promise<Employee | undefined> {
    let conn = await this.gerenciadorConexao.obterConexao();
    const employeeRepo = conn.getRepository(Employee);

    const employee = await employeeRepo.findOne();

    console.log(employee);

    return employee;
    // return {
    //   id,
    //   email: "jane@doe.com",
    //   name: nome ?? "Jane Doe",
    //   status: "Happy",
    //   phoneNumbers: [],
    // };
  }

  /**
   *
   * @param parametrosCriacaoUsuario Parametros para criação de um usuário
   * @returns Usuário criado
   */
  public criar(parametrosCriacaoUsuario: ParametrosCriacaoUsuario): Usuario {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...parametrosCriacaoUsuario,
    };
  }
}
