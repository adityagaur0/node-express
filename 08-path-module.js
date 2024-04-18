const path=require('path')

console.log(path.sep)

const filepath= path.join('/content','subfolder','text.txt')
const filepath1= path.join('/content/','subfolder','text.txt')
console.log(filepath)   // /content/subfolder/text.txt
console.log(filepath1) // /content/subfolder/text.txt

const base=path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)
