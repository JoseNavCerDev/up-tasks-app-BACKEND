import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL_DATABASE_CONNECTION;

const configMoongose = {
    useNewUrlParser : true,
    useUnifiedTopology: true
}

const databaseConnection = async () => {
    try {        
        const connection = await mongoose.connect(URL, configMoongose);
        console.log('Successfullt DDBB conecction');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default databaseConnection;

