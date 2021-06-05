import { Contains, MaxLength } from "class-validator";

export class Usuario {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}

export class ParametrosCriacaoUsuario {
  @Contains("farofa", {
    message: "O email deve conter o campo farofa",
  })
  @MaxLength(6, {
    message: "O email deve ter o Tamanho máximo 6 caracteres",
  })
  email: string;
  name: string;
}
