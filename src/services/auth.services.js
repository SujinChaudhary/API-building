import User from "../models/User.js";
import bcrypt from "bcrypt";

const login = async (input) => {
  const user = await User.findOne({
    $or: [{ email: input?.email }, { phone: input?.phone }],
  }).select("+password");
  if (!user) {
    throw {
      message: "User not found",
    };
  }
  const isPasswordMatach = await bcrypt.compare(input.password, user.password);
  if (!isPasswordMatach) {
    throw {
      message: "Credentials don't match.",
    };
  }
  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone
  };
};
const register = async (input) => {
  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user =  await User.create({
    name: input.name,
    email: input.email,
    phone: input.phone,
    password: hashedPassword,
  });
  return {
   
    name: user.name,
    email: user.email,
    phone: user.phone
  };
};
export default { login, register };
