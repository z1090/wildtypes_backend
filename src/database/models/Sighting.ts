import mongoose, { Schema } from 'mongoose'

const SightingSchema = new Schema({
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
    }

})

export const Sighting = mongoose.model('Sighting', SightingSchema)