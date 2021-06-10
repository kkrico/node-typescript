import { Body, Get, Path, Post, Query, Route, Res, TsoaResponse } from "tsoa";
import { Usuario, ParametrosCriacaoUsuario } from "./usuario";
import { UsuarioServico } from "./usuarioServico";
import { inject, injectable } from "inversify";
import {
  RespostaApiErro,
  RespostaApiSucesso,
  sucesso,
  validar,
} from "../app/model";
import { Employee } from "../app/database/entidades/Employee";

@Route("usuario")
@injectable()
export class UsuarioController {
  constructor(@inject(UsuarioServico) private usuarioServico: UsuarioServico) {}

  @Get("{userId}")
  public async obterUsuario(
    @Path("userId") idUsuario: number,
    @Query() name?: string
  ): Promise<RespostaApiSucesso<Employee>> {
    return sucesso(await this.usuarioServico.obter(idUsuario, name));
  }

  @Post()
  public async criarUsuario(
    @Body() request: ParametrosCriacaoUsuario,
    @Res() _res: TsoaResponse<400, RespostaApiErro>
  ): Promise<RespostaApiSucesso<Usuario>> {
    await validar(ParametrosCriacaoUsuario, request);
    return sucesso(this.usuarioServico.criar(request));
  }
}
