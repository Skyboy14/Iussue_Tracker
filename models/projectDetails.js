const mongoose = require('mongoose');

const projectDetailsSchema = new mongoose.Schema({

    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    issues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bugDetails'
        }
    ],
    labels: [
        {
            type: String,
        }
    ]
}, {
    timestamps: true,
})


const projectDetails = mongoose.model('projectDetails', projectDetailsSchema);

module.exports = projectDetails;