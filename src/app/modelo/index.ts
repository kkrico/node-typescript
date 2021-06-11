import { ClassConstructor, plainToClass } from "class-transformer";
import { validateOrReject, ValidationError } from "class-validator";
import { FieldErrors, ValidateError } from "tsoa";

export class RespostaApiSucesso<T = null> {
  sucesso = true;
  data: T | null = null;
}

export const PadraoResposta = {
  mensagem: {
    erro: "A requisição falhou na validação negocial",
    sucesso: "Sucesso",
    semacesso: "A requisição falhou por falta de permissão e/ou token inválido",
    errointerno: "Erro interno do servidor",
  },
};

export class RespostaApiErroNegocial {
  public constructor(erros: string[]) {
    this.erros = erros;
  }
  sucesso = false;
  erros = [] as string[];
}

export class RespostaApiErroSemAcesso {
  public constructor(erro: string) {
    this.erro = erro;
  }
  sucesso = false;
  erro: string;
}

export class RespostaApiErroInterno {
  public constructor(erro: string) {
    this.erro = erro;
  }
  sucesso = false;
  erro: string;
}

type Callback<T> = () => T;
export function sucesso<T>(
  parametro: Callback<T> | T | any | null = null
): RespostaApiSucesso<T> {
  let result;
  if (typeof parametro === "function") {
    const fn = parametro as Callback<T>;
    result = fn();
  } else {
    result = parametro;
  }

  return {
    sucesso: true,
    data: result,
  };
}

export async function validar<T, V>(cls: ClassConstructor<T>, plain: V) {
  let result = plainToClass(cls, plain);

  try {
    await validateOrReject(result as Object);
  } catch (errors) {
    gerarMensagemErro(errors);
  }

  function gerarMensagemErro(errors: any) {
    var mensagensEmArray = errors.reduce(
      (acumulado: string[], anterior: ValidationError): string[] => {
        Object.keys(
          anterior.constraints as {
            [type: string]: string;
          }
        ).map((key) => {
          var current = anterior.constraints as {
            [type: string]: string;
          };
          acumulado.push(current[key]);
        });

        return acumulado;
      },
      []
    ) as string[];
    let fieldErrors: FieldErrors = {};
    mensagensEmArray.forEach((msg) => {
      fieldErrors[msg] = {
        message: msg,
        value: msg,
      };
    });

    throw new ValidateError(fieldErrors, "Erro de validação negocial");
  }
}
