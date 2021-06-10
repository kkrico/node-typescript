import { Body, Get, Post, Route, Res, TsoaResponse } from "tsoa";
import { Usuario, RegistroUsuarioRequest, EmployeeDTO } from "./usuarioModelos";
import { UsuarioServico } from "./usuarioServico";
import { inject } from "inversify";
import {
  RespostaApiErro,
  RespostaApiSucesso,
  sucesso,
  validar,
} from "../app/modelo";
import { Singleton } from "../app/ioc/scopes";

@Route("usuario")
@Singleton(UsuarioController)
export class UsuarioController {
  constructor(@inject(UsuarioServico) private usuarioServico: UsuarioServico) {}

  /**
   * Lista todos os usuários registrados. Entende que usuário = employee
   */
  @Get()
  public async obterUsuario(): Promise<RespostaApiSucesso<EmployeeDTO[]>> {
    return sucesso(await this.usuarioServico.listar());
  }

  @Post()
  public async criarUsuario(
    @Body() request: RegistroUsuarioRequest,
    @Res() _res: TsoaResponse<400, RespostaApiErro>
  ): Promise<RespostaApiSucesso<Usuario>> {
    await validar(RegistroUsuarioRequest, request);
    return sucesso(this.usuarioServico.criar(request));
  }
}
