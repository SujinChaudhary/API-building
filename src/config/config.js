import dotenv from 'dotenv';
dotenv.config();
const config= {
    port : process.env.PORT || 7000 ,
    db : process.env.MONGODB_URL || "",

};
export default config;
