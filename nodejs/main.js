console.log("Hello, World!");
// const fs = require('fs');
import fs from 'fs';
import {square} from './compute.js';

//blocking Task
fs.readFile('./data/data.txt','utf-8',(error,data)=>{
    if (error){
        console.log(error);
        return;

    }
    console.log(data);

});

console.log("Reading of the data Successful");
console.log(square(10));
