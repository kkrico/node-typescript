"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = exports.Singleton = void 0;
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const Singleton = function (identifier) {
    return inversify_binding_decorators_1.fluentProvide(identifier).inSingletonScope().done();
};
exports.Singleton = Singleton;
const Transient = function (identifier) {
    return inversify_binding_decorators_1.fluentProvide(identifier).inTransientScope().done();
};
exports.Transient = Transient;
