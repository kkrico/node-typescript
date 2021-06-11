import { Body, Post, Route, Response, Controller } from "tsoa";
import * as jwt from "jsonwebtoken";
import {
  PadraoResposta,
  RespostaApiErroInterno,
  RespostaApiErroNegocial,
  RespostaApiErroSemAcesso,
  RespostaApiSucesso,
  sucesso,
} from "../app/modelo";
import { Singleton } from "../app/ioc/scopes";
import { LoginDTO, LoginRequest } from "./loginModels";

@Route("login")
@Singleton(LoginController)
export class LoginController extends Controller {
  /**
   * Permite que um usuário faça login. Neste exemplo, somente é válido o login demo com senha demo
   * @param request Request com login e senha
   * @returns Token
   */
  @Response<RespostaApiErroNegocial>(400, PadraoResposta.mensagem.erro)
  @Response<RespostaApiErroSemAcesso>(403, PadraoResposta.mensagem.semacesso)
  @Response<RespostaApiErroInterno>(500, PadraoResposta.mensagem.errointerno)
  @Response<RespostaApiSucesso<LoginDTO>>(200, PadraoResposta.mensagem.sucesso)
  @Post()
  public async autenticar(
    @Body() request: LoginRequest
  ): Promise<RespostaApiSucesso<LoginDTO> | RespostaApiErroSemAcesso> {
    if (request.login === "demo" && request.senha === "demo") {
      let token = jwt.sign(
        { username: request.login },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "24h", // expires in 24 hours
        }
      );

      return sucesso({
        token: token,
      });
    }

    this.setStatus(403);
    return new RespostaApiErroSemAcesso("Usuário ou senha inválida");
  }
}
