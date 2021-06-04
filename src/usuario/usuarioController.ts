import { Body, Get, Path, Post, Query, Res, Route, TsoaResponse } from "tsoa";
import { Usuario } from "./usuario";
import { Singleton } from "../app/ioc/scopes";
import { ParametrosCriacaoUsuario, UsuarioServico } from "./usuarioServico";
import { inject } from "inversify";
import { RespostaApiComErro, RespostaApiSucesso } from "../app/model";

@Route("usuario")
@Singleton(UsuarioController)
export class UsuarioController {
  constructor(@inject(UsuarioServico) private usuarioServico: UsuarioServico) {}

  @Get("{userId}")
  public async obterUsuario(
    @Path("userId") idUsuario: number,
    @Query() name?: string
  ): Promise<RespostaApiSucesso<Usuario>> {
    return this.usuarioServico.obter(idUsuario, name);
  }

  @Post()
  public async criarUsuario(
    @Body() request: ParametrosCriacaoUsuario,
    @Res() _res: TsoaResponse<400, RespostaApiComErro>
  ): Promise<RespostaApiSucesso<Usuario>> {
    return this.usuarioServico.criar(request);
  }
}
