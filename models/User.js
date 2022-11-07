const { Schema, Types } = require('mongoose');

function emailTest(email){
    const regex =  '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    return regex.test(email);
};

const response = new Schema({
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
        validate: [emailTest, 'Please fill out a valid email.']
    }
},{});

module.exports = response;