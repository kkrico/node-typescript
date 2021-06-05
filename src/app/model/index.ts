export class RespostaApiSucesso<T = null> {
  sucesso = true;
  data: T | null = null;
}

export class RespostaApiErro {
  sucesso = false;
  erros = [] as string[];
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

class Exemplo {
  mensagemDeValidacao = "Erro de Validação";
  retornoValidacao = {
    sucesso: false,
    erros: "Erro de exemplo",
  };
}

export const exemplo = new Exemplo();
