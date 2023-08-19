const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    featured: {
        type: Boolean
    },
    cost: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;