const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    description:{
        type: String,
    },
    Status:{
        type: String,
        enum: ['Not Started','In Process', 'Completed'],
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    }
});

module.exports = mongoose.model('Project', ProjectSchema);