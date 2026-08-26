import fs from "fs";

const fetchUserData= () => 
    new Promise((resolve,rejected)=>{
    fs.readFile("data/user_data.json","utf-8",(error,users)=>{
        if(error){
            rejected(error);
        }else{
            resolve(users);
        }
    });

});

(async () => {
    const users = await fetchUserData();
    console.log(users);
})();

