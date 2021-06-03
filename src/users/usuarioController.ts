import { Body, Get, Path, Post, Query, Route } from "tsoa";
import { Usuario } from "./usuario";
import { Singleton } from "../util/singleton";
import { UsuarioServico, ParametrosCriacaoUsuario } from "./usuarioServico";
import { inject } from "inversify";
import {
  RespostaApi,
  ApiComRespostaErroPadrao,
  ApiComRespostaSucessoPadrao,
  respostaSucesso,
} from "../appModel";

@Route("usuario")
@Singleton(UsuarioController)
export class UsuarioController {
  constructor(@inject(UsuarioServico) private usuarioServico: UsuarioServico) {}

  @Get("{userId}")
  @ApiComRespostaErroPadrao()
  @ApiComRespostaSucessoPadrao()
  public async obterUsuario(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<RespostaApi<Usuario>> {
    return this.usuarioServico.obter(userId, name);
  }

  @ApiComRespostaErroPadrao()
  @Post()
  public async criarUsuario(
    @Body() request: ParametrosCriacaoUsuario
  ): Promise<RespostaApi<Usuario>> {
    this.usuarioServico.criar(request);

    return respostaSucesso();
  }
}
