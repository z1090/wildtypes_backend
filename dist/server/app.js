"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("../database/mongoose");
var sightingRouter_1 = require("./routes/sightingRouter");
var app = express_1.default();
var port = 3000;
app.use(express_1.default.json());
app.use(sightingRouter_1.router);
app.listen(port, function () {
    console.log('Server is running on port ' + port);
});
