"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sucesso = void 0;
function sucesso(parametro = null) {
    let result;
    if (typeof parametro === "function") {
        const fn = parametro;
        result = fn();
    }
    else {
        result = parametro;
    }
    return {
        sucesso: true,
        data: result,
    };
}
exports.sucesso = sucesso;
