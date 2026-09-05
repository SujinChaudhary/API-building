import jwt from "jsonwebtoken";
import config from "../config/config.js";
const generateToken = (payload) => {
  const token = jwt.sign(payload, config.jwtSecret, {
    expiresIn: "1d",
  });
  return token;
};
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export default { generateToken, verifyToken };
