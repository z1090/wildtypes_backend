"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Sighting_1 = require("../../database/models/Sighting");
// interface Sighting extends Document {
//     user: String;
//     date: Date;
//     name: String;
//     certainty: Number;
//     businessName: String;
//     category: String;
//     useageRating: Number;
//     location: {
//         lat: Number;
//         lng: Number;
//         address: String;
//         map: String;
//     };
//     photo: String;
// }
exports.router = express_1.Router();
exports.router.get('', function (req, res) {
    res.send('Server is running');
});
exports.router.post('/sightings', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sighting, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sighting = new Sighting_1.Sighting(__assign({}, req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, sighting.save()];
            case 2:
                _a.sent();
                res.status(201).send(sighting);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.status(400).send(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/sightings', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sightings, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Sighting_1.Sighting.find({})];
            case 1:
                sightings = _a.sent();
                res.status(200).send(sightings);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(500).send(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/sightings/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, sighting, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Sighting_1.Sighting.findOne({ _id: _id })];
            case 2:
                sighting = _a.sent();
                if (!sighting) {
                    return [2 /*return*/, res.status(404).send()];
                }
                res.status(200).send(sighting);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                res.status(500).send(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.patch('/sightings/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updates, allowedUpdates, isValidUpdate, sighting_1, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updates = Object.keys(req.body);
                allowedUpdates = [
                    'location',
                    'name',
                    'certainty',
                    'businessName',
                    'category',
                    'useage',
                    'photo'
                ];
                isValidUpdate = updates.every(function (update) { return allowedUpdates.includes(update); });
                if (!isValidUpdate) {
                    return [2 /*return*/, res.status(400).send('Error: Invalid Updates')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Sighting_1.Sighting.findById(req.params.id)];
            case 2:
                sighting_1 = _a.sent();
                if (!sighting_1) {
                    return [2 /*return*/, res.status(404).send()];
                }
                updates.forEach(function (update) { return sighting_1[update] = req.body[update]; });
                return [4 /*yield*/, sighting_1.save()];
            case 3:
                _a.sent();
                res.send(sighting_1);
                return [3 /*break*/, 5];
            case 4:
                e_4 = _a.sent();
                res.status(400).send(e_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.delete('/sightings/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sighting, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Sighting_1.Sighting.findByIdAndDelete(req.params.id)];
            case 1:
                sighting = _a.sent();
                if (!sighting) {
                    return [2 /*return*/, res.status(404).send()];
                }
                res.status(200).send(sighting);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500).send(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
