const {readFileSync,writeFileSync} = require('fs');
// const fs= require('fs');
// fs.read

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

// console.log(first,second)  //hello this is first text file hello this is second text file

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, {flag: 'a'}
    //flag a means append to the existing result
)