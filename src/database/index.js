import mongoose from "mongoose";

export default async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://shyam:shyam_portfolio25@cluster0.dz4zsjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('database connected successfully!');
    }catch(e){
        console.log(e);
    }
}