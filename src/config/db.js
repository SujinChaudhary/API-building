import mongoose from 'mongoose';
import config from './config.js';
async function connectDB(){
    try{
        await mongoose.connect(`mongodb://${config.host}:${config.dbport}/${config.dbname}`);
        console.log("Database Connected");
        
    }catch(error){
        console.log("Connection Failed",error);

    }

}
export default connectDB;
