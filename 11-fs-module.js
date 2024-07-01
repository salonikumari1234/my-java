//there no multiple task can be done at a time 
//see output


const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
//console.log(first,second)
writeFileSync('./content/result-async.txt', `here is the result :${first}, ${second}`, { flag: 'a' })
console.log('done with this task');
console.log('starting the next one');