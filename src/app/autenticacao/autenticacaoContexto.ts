import { Transient } from "../ioc/scopes";

@Transient(AutenticacaoContexto)
export class AutenticacaoContexto {
  jwtSecret: string = process.env.JWT_SECRET as string;
}
