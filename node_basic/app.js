const http = require('http'); // For http module 
const fs = require('fs') // For File system module
const path = require('path');

console.log(path.join(__dirname,'hello.txt')); // Tell us correct path


// http module 
// http.createServer((req, res) =>{
//     res.write("Hello World")
//     res.end
// }).listen(3005)

// fs module (Append File)
// fs.appendFile('hello.txt','Hello World',(error) =>{
//     if(error){
//         console.log(error);

//     }
// })

// fs module (Write File)
//fs.writeFileSync('hello.txt','Hello World')

// fs module (Unlink)
// fs.unlink('hello.txt', (error) => {
//     if (error) {
//         console.log(error);

//     }
// })