import express from "express";
import fs from "fs/promises";
import config from './config/config.js';


const app = express();


app.get("/", (request, response) => {
  response.send("Home Page");
});
app.get("/about", (request, response) => {
  response.send("About Page");
});
//user data leraune

app.get("/users/", async (request, response) => {
  const users = await fs.readFile("data/user_data.json", "utf-8");

  response.json(JSON.parse(users));
});

//user data dynamically kasari leraune

app.get("/users/:id", async (request, response) => {
  const id = request.params.id;

  const users = await fs.readFile("data/user_data.json", "utf-8");
  const user = JSON.parse(users).find((user) => user.id == id);
  if(!user){
   return response.send("User Not Found");
  }
  response.json(user);
});

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});
