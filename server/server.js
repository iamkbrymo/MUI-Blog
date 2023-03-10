const express = require ("express");
const colors = require("colors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000; 

const dotenv = require("dotenv").config({ path: '.env' });


const app = express();

app.use(express.json({extended: false}));

const connectDB = async () => {
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL);
       console.log(`Mongoose Connected: ${conn.connection.host}`.cyan.underline.bold);
    }catch(err){
        console.log(`ERROR: ${err.message}`.bgRed.underline.bold);
        process.exit(1);
    }
}
connectDB();
app.listen(PORT, ()=> console.info(`Server is running on port ${PORT}`.green.underline.bold));