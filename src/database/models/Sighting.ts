import mongoose, { Schema } from 'mongoose'

const SightingSchema = new Schema({
    userId: {
        type: String,
        default: 'DefaultUserID'
    },
    date: {
        type: Date,
        default: Date.now
    },
    typefaceName: String,
    certainty: Number,
    businessName: String,
    category: String,
    useageRating: Number,
    location: {
        lat: Number,
        lng: Number,
        address: String,
        mapImage: String,
    },
    photo: String
})

export const Sighting = mongoose.model('Sighting', SightingSchema)