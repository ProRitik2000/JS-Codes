const { error } = require("console");
const fs=require("fs");
// fs.writeFileSync("./FileTest1","Hello file handling")
// fs.writeFile("./FileTest2","Asynchronous call",(error)=>{});//Asynchronous 
// const result=fs.readFile("./Details.txt","utf-8");
// console.log(result);
// fs.readFile("./Details.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./Details.txt",new Date().getDate().toLocaleString());//to show the current date
// fs.cpSync("./FileTest2","./copy.txt");//to copy one file data to another file 
// fs.unlinkSync("./FileTest2")//to delete the files
console.log(fs.statSync("./FileTest1"));//for finding complete information about any file

//---------------difference b/w write file and writefilesync----------------------//
//Read file is an async function in which we passes a argument (err,result),if error occurs then err object is call 
//or if result occurs is simply run.