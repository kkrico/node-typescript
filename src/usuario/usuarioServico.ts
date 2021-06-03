// src/users/usersService.ts
import { injectable } from "inversify";
import { RespostaApiSucesso, respostaSucesso } from "../appModel";
import { Usuario } from "./usuario";

// A post request should not contain an id.
export type ParametrosCriacaoUsuario = Pick<
  Usuario,
  "email" | "name" | "phoneNumbers"
>;

@injectable()
export class UsuarioServico {
  public obter(id: number, nome?: string): RespostaApiSucesso<Usuario> {
    return respostaSucesso({
      id,
      email: "jane@doe.com",
      name: nome ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    });
  }

  public criar(
    parametrosCriacaoUsuario: ParametrosCriacaoUsuario
  ): RespostaApiSucesso<Usuario> {
    return respostaSucesso({
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...parametrosCriacaoUsuario,
    });
  }
}
