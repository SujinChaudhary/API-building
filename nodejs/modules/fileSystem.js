import { error } from "console";
import fs from "fs";

//Sync readFile
const readFile = fs.readFileSync("data/data.txt", "utf8");
console.log(readFile);

//Async readFile
fs.readFile("data/data.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// //WriteFileSync & ASYNC
// fs.writeFileSync("data/writedata.txt","sync in programming language");
// fs.writeFile("data/writedata.txt","async in system File",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }

// });

fs.appendFileSync("data/writedata.txt", "This is appended text");
fs.appendFile(
  "data/writedata.txt",
  "This is appended file 2",
  (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Data has been written");
    }
  },
);
fs.appendFile(
  "data/user.json",
  JSON.stringify([
    { name: "Ram" },
    { name: "Hari" },
    { name: "Sujin" },
    { name: "Kaamm" },
    { name: "Tam" },
  ]),()=>{}

);

fs.rm("data/user.json",()=>{});

