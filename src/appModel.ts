type RespostaComSucesso<TData> = { sucesso: boolean; data: TData };
export type RespostaApiSucesso<T = { sucesso: true; data: null }> =
  RespostaComSucesso<T>;

export type RespostaApiComErro = {
  sucesso: false;
  erros: string[];
};

type Callback<T> = () => T;
export function respostaSucesso<T>(
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
