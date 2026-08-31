import express from "express";
import connectDB from "./config/db.js";
import config from "./config/config.js";
import usersRoute from "./routes/user.routes.js";

const app = express();
connectDB();



app.get("/", (request, response) => {
  response.send("Home Page");
});
app.get("/about", (request, response) => {
  response.send("About Page");
});

app.use("/", usersRoute);

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});
