const mongoose = require("mongoose");

export default async function connectDb(){
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);

        if(!connect){
            console.log("no connection ");
        }

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log( "error occurred while connecting to db ", error)
    }
}