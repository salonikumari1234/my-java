//here we can serve multiple user at a time
//see output



const { readFile, writeFile } = require('fs')
console.log('start');
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
        writeFile(
            './content/result-async.txt', `here is the result :${first}, ${second}`, (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting with next task');