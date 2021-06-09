import { Container, decorate, injectable } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { Controller } from "tsoa";
import { UsuarioServico } from "../../usuario/usuarioServico";

// Create a new container tsoa can use
const iocContainer = new Container();
iocContainer.bind<UsuarioServico>(UsuarioServico).toSelf().inSingletonScope();

decorate(injectable(), Controller); // Makes tsoa's Controller injectable

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

// export according to convention
export { iocContainer };
