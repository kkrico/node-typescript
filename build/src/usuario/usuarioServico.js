"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioServico = void 0;
// src/users/usersService.ts
const inversify_1 = require("inversify");
const model_1 = require("../app/model");
let UsuarioServico = class UsuarioServico {
    /**
     * Pesquisa um usuário por id
     * @param id Identificador do usuário
     * @param nome Nome do usuário
     * @returns Resposta no padrão da Api com usuario
     */
    obter(id, nome) {
        return model_1.sucesso({
            id,
            email: "jane@doe.com",
            name: nome !== null && nome !== void 0 ? nome : "Jane Doe",
            status: "Happy",
            phoneNumbers: [],
        });
    }
    /**
     *
     * @param parametrosCriacaoUsuario Parametros para criação de um usuário
     * @returns Usuário criado
     */
    criar(parametrosCriacaoUsuario) {
        return model_1.sucesso(Object.assign({ id: Math.floor(Math.random() * 10000), status: "Happy" }, parametrosCriacaoUsuario));
    }
};
UsuarioServico = __decorate([
    inversify_1.injectable()
], UsuarioServico);
exports.UsuarioServico = UsuarioServico;
