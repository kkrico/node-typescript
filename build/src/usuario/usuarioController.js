"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var UsuarioController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tsoa_1 = require("tsoa");
const scopes_1 = require("../app/ioc/scopes");
const usuarioServico_1 = require("./usuarioServico");
const inversify_1 = require("inversify");
let UsuarioController = UsuarioController_1 = class UsuarioController {
    constructor(usuarioServico) {
        this.usuarioServico = usuarioServico;
    }
    obterUsuario(idUsuario, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usuarioServico.obter(idUsuario, name);
        });
    }
    criarUsuario(request, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usuarioServico.criar(request);
        });
    }
};
__decorate([
    tsoa_1.Get("{userId}"),
    __param(0, tsoa_1.Path("userId")),
    __param(1, tsoa_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "obterUsuario", null);
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body()),
    __param(1, tsoa_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criarUsuario", null);
UsuarioController = UsuarioController_1 = __decorate([
    tsoa_1.Route("usuario"),
    scopes_1.Singleton(UsuarioController_1),
    __param(0, inversify_1.inject(usuarioServico_1.UsuarioServico)),
    __metadata("design:paramtypes", [usuarioServico_1.UsuarioServico])
], UsuarioController);
exports.UsuarioController = UsuarioController;
