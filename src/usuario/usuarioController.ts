import { Body, Get, Post, Route, Response, Security } from "tsoa";
import {
  PadraoResposta,
  RespostaApiErroInterno,
  RespostaApiErroNegocial,
  RespostaApiErroSemAcesso,
  RespostaApiSucesso,
  validar,
  sucesso,
} from "../app/modelo";
import { Usuario, RegistroUsuarioRequest, EmployeeDTO } from "./usuarioModelos";
import { UsuarioServico } from "./usuarioServico";
import { inject } from "inversify";
import { Singleton } from "../app/ioc/scopes";

@Route("usuario")
@Singleton(UsuarioController)
export class UsuarioController {
  constructor(@inject(UsuarioServico) private usuarioServico: UsuarioServico) {}

  /**
   * Lista os employees cadastrados
   * @returns Lista de todos os employees
   */
  @Response<RespostaApiErroSemAcesso>(403, PadraoResposta.mensagem.semacesso)
  @Response<RespostaApiErroInterno>(500, PadraoResposta.mensagem.errointerno)
  @Response<RespostaApiSucesso<EmployeeDTO[]>>(
    200,
    PadraoResposta.mensagem.sucesso
  )
  @Get()
  @Security("Bearer")
  public async obterUsuario(): Promise<RespostaApiSucesso<EmployeeDTO[]>> {
    return sucesso(await this.usuarioServico.listar());
  }

  /**
   * Cria um usuário, para testar o post
   */
  @Response<RespostaApiErroNegocial>(400, PadraoResposta.mensagem.erro)
  @Response<RespostaApiErroSemAcesso>(403, PadraoResposta.mensagem.semacesso)
  @Response<RespostaApiErroInterno>(500, PadraoResposta.mensagem.errointerno)
  @Response<RespostaApiSucesso<Usuario>>(200, PadraoResposta.mensagem.sucesso)
  @Security("Bearer")
  @Post()
  public async criarUsuario(
    @Body() request: RegistroUsuarioRequest
  ): Promise<RespostaApiSucesso<Usuario>> {
    await validar(RegistroUsuarioRequest, request);
    return sucesso(this.usuarioServico.criar(request));
  }
}
