"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
require("../database/mongoose");
var sightingRouter_1 = require("./routes/sightingRouter");
var app = express_1.default();
var port = 3000;
// app.use(express.json());
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: '200mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '1mb', extended: true }));
app.use(sightingRouter_1.router);
app.listen(port, function () {
    console.log('Server is running on port ' + port);
});
