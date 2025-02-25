import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        email:{type:String,unique:true},
        password:{type:String,required:true},  
    },
    {
        timestamps: true, // Adds createdAt and updatedAt automatically
        
    }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
