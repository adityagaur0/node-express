// common js , every file is the module(by default)
//Modules- Encapsulated code(only share minimum)

const names=require('./03-names')
const sayhi=require('./04-utils')
const data =require('./05-alternate-flavours')
require('./06-mind-granades') // this directly run the 06 file.

// sayhi('susan')
// sayhi(names.john)

// console.log(data)

