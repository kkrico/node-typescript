"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swagger = void 0;
var Swagger;
(function (Swagger) {
    function isQueryParameter(parameter) {
        return parameter.in === 'query';
    }
    Swagger.isQueryParameter = isQueryParameter;
})(Swagger = exports.Swagger || (exports.Swagger = {}));
