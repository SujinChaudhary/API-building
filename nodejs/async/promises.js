// promise => future Values;
// pending => {Resolved,Rejected}
import fs from "fs/promises";
import { json } from "stream/consumers";

fs.readFile("data/user_data.json", "utf-8")
  //Resolved (Success)
  .then((users) => {
    console.log(users);
    return fs.readFile("data/post_data.json", "utf-8");
  })
  .then((posts) => {
    console.log(posts);
    fs.readFile("data/user_data.json", "utf-8").then((users)=>{
         const userPosts = JSON.parse(users).map((user) => {
      return {
        ...user,
        post: JSON.parse(posts).find((post) => post.userID == user.id),
      };
    });
    console.log(userPosts);
    })
   
    return fs.readFile("data/comments_data.json", "utf-8");
  })
  .then((comments) => {
    console.log(comments);
  })

  //If Rejected
  .catch((error) => {
    console.log(error);
  });
