const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
const { formatTime } = require('../utils/modelHelper')


const response = new Schema({
    thoughtText:{
        type: String,
        required: 'Must have text in your thought.',
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatTime
    },
    username:{
        type: String,
        required: 'Must have username for thought creation.'
    },
    reactions:[reactionSchema]
},{
    toJSON: {
        virtuals: true
    },
    id: false
});

response.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', response);

module.exports = Thought;