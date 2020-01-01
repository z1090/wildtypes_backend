"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var SightingSchema = new mongoose_1.Schema({
    user: {
        type: String,
        default: 'DefaultUserID'
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: String,
    certainty: Number,
    businessName: String,
    category: String,
    useageRating: Number,
    location: {
        lat: Number,
        lng: Number,
        address: String,
        map: String,
    },
    photo: String
});
exports.Sighting = mongoose_1.default.model('Sighting', SightingSchema);
