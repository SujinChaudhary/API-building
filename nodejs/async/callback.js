import fs from 'fs' ;
fs.readFile("data/data.txt", "utf-8",(err,data)=>{
    console.log(data);

});
fs.readFile("data/user_data.json", "utf-8",(userErr,users)=>{
    if(userErr){
        console.log(userErr);
    
    }else{
        console.log(users);
        fs.readFile("data/post_data.json","utf-8",(postErr,posts)=>{
            if(postErr){
                console.log(postErr);
            }else{
                console.log(posts);
                //Success Data Retrieval
                const userPosts = JSON.parse(users).map((user)=> {
                 return{
                    ...user,
                    post: JSON.parse(posts).find((post)=> post.userID == user.id),


                 };
                });
                console.log(userPosts);

                fs.readFile("data/comments_data.json","utf-8",(commentErr,comments)=>{
                    if(commentErr){
                        console.log(commentErr);
                    }else{
                        console.log(comments);
                    }
                })
            }
        })
    }
});

