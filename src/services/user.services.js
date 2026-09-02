import fs from "fs/promises";
import User from "../models/User.js";

const getUsers = async () => {
  const users = await fs.readFile("data/user_data.json", "utf-8");
  return users;
};
const getUserById = async (id) => {
  const users = await fs.readFile("data/user_data.json", "utf-8");
  const user = JSON.parse(users).find((user) => user.id == id);
  return user;
};

const createUser = async () => {
  return await User.create({
    name: "Hram Shrestha",
    email: "hram@gmail.com",
    password: "apps123apps1",
    phone: 9812314529,
  });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
export default { getUsers, getUserById, createUser, deleteUser };
