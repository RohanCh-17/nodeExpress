//local
const secret = 'secret'
//share
const rohan = 'rohan'
const isha = 'isha'
module.exports = { rohan, isha }
//Modules 
// commonjs , every file is modules (bydefault)
// modules, encapsulated code (only shares minimum)


const sayHi = require('./4-names');
const names = require('./3-modulesBasics');
const item = require('./6-alternative')
require('./7-mide-grenade')
// console.log(names);
// sayHi(names.rohan)
// sayHi(names.isha)