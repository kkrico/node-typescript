import { Response } from "tsoa";

interface ResposotaGenericaAPI {
  sucesso: boolean;
}
export interface ErroValidacao extends ResposotaGenericaAPI {
  sucesso: false;
  erros: string[];
}

export interface RespostaApi<T> extends ResposotaGenericaAPI {
  sucesso: true;
  data: T | null;
}

export function ApiComRespostaErroPadrao(description?: string): Function {
  return Response<ErroValidacao>(
    400,
    description || "Resposta em caso de falha na validação"
  );
}

export function ApiComRespostaSucessoPadrao<T>(description?: string): Function {
  return Response<RespostaApi<T>>(
    200,
    description || "Resposta em caso de sucesso"
  );
}

type Callback<T> = () => T;

export function respostaSucesso<T>(
  parametro: Callback<T> | T | null = null
): RespostaApi<T> {
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
