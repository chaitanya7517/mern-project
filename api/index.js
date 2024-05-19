import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app= express();

mongoose.connect(process.env.MONGO).then(()=> {
    console.log('Connected to db')
}).catch((error)=> {
    console.log('error while connection with db');
})

//method 2
// const connectDB = async function() {
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log('connected to db');
//     } catch(error) {
//         console.log('Error while connecting with db');
//     }
// }
// connectDB();


app.listen(3000,()=>{
    console.log(`server is running on 3000 `);
})