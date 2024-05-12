const fs1 = require("fs") ;
 //Synchronous Call
fs.writeFileSync("./abc.txt","Hello Blocking Code = Synchronous Programming") ;

// Asynchronous Call
fs.writeFileSync("./abc.txt","Hello Non-Blocking Code = Asynchronous Programming") ;
//=========================================================================================================
//Program using Blocking Code
const fs2 = require("fs") ;
console.log("First Task") ;
const result = fs2.readFileSync("./Details.txt","utf-8") ;
console.log(result);
console.log("Third Task");
//============================================================================
// ======================================
// Program using Non-Blocking Code       
const fs3 = require("fs") ;
console.log("First Task") ;
fs3.readFile("./Details.txt","utf-8", (err , result)=> {
if(err){
console.log("Error", err) ;
}
else
{
 console.log(result) ;
 }
}) ;
console.log("Third Task");
//============================================================================
// ===============================
const os = require("os") ;
console.log(os.cpus().length);
// Default Thread Pool Size = 4
// Max ? - 8Core CPU -8