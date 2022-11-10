const { Schema, model } = require('mongoose');
const { emailTest } = require('../utils/modelHelper')


const userSchema = new Schema(
    {
    username:{
        type: String,
        required: 'Username must not be empty.',
        unique: 'Username must be unique.',
        trim: true
    },
    email: {
        type: String,
        required: 'Email must not be empty.',
        unique: 'Email must be unique.',
        validate: {
            validator: emailTest,
            message: "Please enter a valid email"
        } //this may not work
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends:[ {
        type: Schema.Types.ObjectId,
        ref: 'user'
    } ] //This might not work 
    },
    {
    toJSON: {
        virtuals: true
    },
    id: false
    }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('user', userSchema)

module.exports = User;