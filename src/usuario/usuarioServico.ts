// src/users/usersService.ts
import { inject } from "inversify";
import { Transient } from "../app/ioc/scopes";
import { GerenciadorConexao } from "../app/database";
import { Employee } from "../app/database/entidades/Employee";
import { Usuario, RegistroUsuarioRequest, EmployeeDTO } from "./usuarioModelos";
import { BaseServico } from "../app/servico/BaseServico";
import { plainToClass } from "class-transformer";

@Transient(UsuarioServico)
export class UsuarioServico extends BaseServico {
  constructor(
    @inject(GerenciadorConexao) gerenciadorConexao: GerenciadorConexao
  ) {
    super(gerenciadorConexao);
  }
  /**
   * Pesquisa um usuário por id
   * @param _id Identificador do usuário
   * @param _nome Nome do usuário
   * @returns Resposta no padrão da Api com usuario
   */
  public async listar(): Promise<EmployeeDTO[] | undefined> {
    const employeeRepo = await this.obterRepositorio(Employee);
    const con = await this.obterConexao();

    const adresses = await con.query("SELECT * FROM adventureworks.address;");
    console.log(adresses);
    const employee = await employeeRepo.find();

    return plainToClass(EmployeeDTO, employee as Object[]);
  }

  /**
   *
   * @param parametrosCriacaoUsuario Parametros para criação de um usuário
   * @returns Usuário criado
   */
  public criar(parametrosCriacaoUsuario: RegistroUsuarioRequest): Usuario {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...parametrosCriacaoUsuario,
    };
  }
}
