const thoughtFunction = require('./thoughtController');
const userFunction = require('./userController');

module.exports= { ...thoughtFunction, ...userFunction };