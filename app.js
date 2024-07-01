/* const amount=9
if(amount<10){
    console.log('small number');
}
else{
    console.log('large number');
}
console.log(`Hey it's my first node app`); */
//GLOBALS -NO WINDOW!!!
//__dirname - path to current directory
//__filename - file name
// require - function to use modules (commonjs) every file is module(by default)
//module - info about current module(file)
//process - info about env where the program is being executed
/* console.log(__dirname)
setInterval(()=>{
   console.log('hello world')
},10)  
 */
//console.log(__filename)
//MODULES - Encapsulated code (only share minimum)
/* const names=require('./4-name')
const sayHi=require('./5-utils')
const data=require('./6-alternative-floor')
require('./7-mind-grenade')
console.log(data) */
//console.log(names);
/* sayHi('susan');
sayHi(names.john);
sayHi(names.peter); 
 */

//Build in modules
/* OS
Path
FS
HTTP */
//const os = require('os')
//info about current user
//const user=os.userInfo()
//console.log(user)

//method return the system uptime in seconds
/* console.log(`The syatem uptime is ${os.uptime()} seconds`)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)
 */
const { readFile, writeFile } = require('fs')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        //console.log(result)
        const second = result;
        if (err) {
            console.log(err)
            return
        }
        //console.log(result)
        const first = result;
        writeFileSync(
            './content/result-sync.txt', `here is the result :${first}, ${second}`, (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})
