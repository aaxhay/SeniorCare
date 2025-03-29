import mongoose from "mongoose";
import colors from "colors";

const connectdb = async()=>{
    try{
        const con = await mongoose.connect("mongodb+srv://Chitra:2002@cluster0.nqukimz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`connected to mongodb db ${con.connection.host}`);

    }
    catch(err){
        console.log(err);
    }
}

export default connectdb;
