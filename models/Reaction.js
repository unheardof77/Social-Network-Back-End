const { Schema, Types } = require('mongoose');
const { formatTime } = require('../utils/modelHelper')


const reactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: 'Must have content to create a reaction.',
        maxLength: 280
    },
    username:{
        type: String,
        required: 'Must have a username to create a reaction.'
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: formatTime
    }
});

module.exports = reactionSchema;