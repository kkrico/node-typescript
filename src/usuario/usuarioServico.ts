// src/users/usersService.ts
import { injectable } from "inversify";
import { Usuario, ParametrosCriacaoUsuario } from "./usuario";

@injectable()
export class UsuarioServico {
  /**
   * Pesquisa um usuário por id
   * @param id Identificador do usuário
   * @param nome Nome do usuário
   * @returns Resposta no padrão da Api com usuario
   */
  public obter(id: number, nome?: string): Usuario {
    return {
      id,
      email: "jane@doe.com",
      name: nome ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
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
