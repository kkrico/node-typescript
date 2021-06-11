// src/app.ts
import "reflect-metadata";
import "es6-shim";
import { RegisterRoutes } from "../build/routes";
import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
import { AutorizacaoErro as AcessoErro } from "./app/autenticacao/AutorizacaoErro";
import { RespostaApiErroNegocial, RespostaApiErroInterno } from "./app/modelo";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(
    "/swagger",
    swaggerUi.serve,
    async (_req: ExRequest, res: ExResponse) => {
      return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
      );
    }
  );
}

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    sucesso: false,
    erros: ["Not Found"],
  });
});

app.use(function errorHandler(
  err: unknown,
  _req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    let know = err as ValidateError;
    return res
      .status(400)
      .json(
        new RespostaApiErroNegocial(
          Object.keys(know.fields).map((e) =>
            know.fields[e].message.replace("is required", "é obrigatório")
          )
        )
      );
  } else if (err instanceof AcessoErro) {
    return res.status(403).json(new RespostaApiErroInterno(err.message));
  } else if (err instanceof Error) {
    console.log(err);
    return res
      .status(500)
      .json(
        new RespostaApiErroInterno(
          "Erro interno no servidor. Tente novamente mais tarde"
        )
      );
  }

  next();
});
