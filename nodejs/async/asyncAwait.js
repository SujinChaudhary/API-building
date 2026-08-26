import fs from "fs/promises";
async function fetchData() {
  try {
    const users = await fs.readFile("data/user_data.json", "utf-8");
    const posts = await fs.readFile("data/post_data.json", "utf-8");
    const comments = await fs.readFile("data/comments_data.json", "utf-8");
    console.log(users);
    console.log(posts);
    console.log(comments);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("The Text is final work");
  }
}
fetchData();

const fetchAPIData = async () => {
  const rawData= await fetch("https://fakeapi.net/products");
  const data = await rawData.json();

  console.log(data);

};fetchAPIData();


