const thoughtFunctions = require('./thoughtController');
const userFunctions = require('./userController');

module.exports=  {...thoughtFunctions, ...userFunctions};
