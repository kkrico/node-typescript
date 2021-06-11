import * as express from "express";
import * as jwt from "jsonwebtoken";
import { AutorizacaoErro } from "./AutorizacaoErro";

export function expressAuthentication(
  request: express.Request,
  _securityName: string,
  scopes?: string[]
): Promise<any> {
  let token =
    request.body.token ||
    request.query.token ||
    request.headers["authorization"];

  if (!token) return new Promise((_resolve, reject) => reject(tokenInvalido()));

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  return new Promise((resolve, reject) => {
    if (!token) {
      reject(tokenInvalido());
    }
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      function (err: any, decoded: any) {
        if (err) {
          reject(tokenInvalido());
        } else {
          let temScopesNaController =
            typeof scopes != "undefined" && scopes.length > 0;
          if (!temScopesNaController) return resolve(decoded);

          let temScopeNoToken = typeof decoded.scopes !== "undefined";
          if (temScopeNoToken && temScopesNaController) {
            for (let scope of scopes!) {
              if (!decoded.scopes.includes(scope)) {
                reject(voceNaoTemAcesso());
              }
            }
            resolve(decoded);
          } else {
            reject(voceNaoTemAcesso());
          }
        }
      }
    );
  });
}

function voceNaoTemAcesso(): AutorizacaoErro {
  return erroComMensagem("Você não tem permissão");
}
function tokenInvalido(): any {
  return erroComMensagem("Token inválido");
}
function erroComMensagem(mensagem: string): AutorizacaoErro {
  return new AutorizacaoErro(mensagem);
}
