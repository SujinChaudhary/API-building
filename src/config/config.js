import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT || 7000,
  host: process.env.HOST || "localhost",
  dbport: process.env.DBPORT || "27017",
  dbname: process.env.DBNAME || "",
};
export default config;
