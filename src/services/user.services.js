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
  const hashedPassword = await bcrypt.hash(input.password, 10);
  const user = await User.create({
    name: input.name,
    email: input.email,
    phone: input.phone,
    password: hashedPassword,
  });
  return {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
export default { getUsers, getUserById, createUser, deleteUser };
