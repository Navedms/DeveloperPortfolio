const mongoose = require('mongoose');



const PortfolioSchema = mongoose.Schema({
    workName: {
        type: String,
        required: true
    },
    siteURL: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        default: undefined

    },
    imageUrl: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        default: 'n/a'
    },
    developerId: {
        type: String,
        required: true
    },
    developerName: {
        type: String,
        required: true
    },
    developerLastName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const PortFolio = mongoose.model('PortFolio', PortfolioSchema)
module.exports = {
    PortFolio
};