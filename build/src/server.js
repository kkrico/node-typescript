"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
var app_1 = require("./app");
var port = process.env.PORT || 3000;
app_1.app.listen(port, function () {
    return console.log("Example app listening at http://localhost:" + port);
});
