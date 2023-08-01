const mongoose = require('mongoose');

const bugDetailsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    issueAuthor: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})


const bugDetails = mongoose.model('bugDetails', bugDetailsSchema);

module.exports = bugDetails;