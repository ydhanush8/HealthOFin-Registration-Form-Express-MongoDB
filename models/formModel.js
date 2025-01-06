import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: true
        },
        lName:{
            type:String,
            required:true 
        },
        password:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            required: true
        },
        gender:{
            type:String
        },
        city:{
            type:String,
        },
        state:{
            type:String 
        },
        country:{
            type:String 
        }
    }, 
    {
        timestamps: true
    }
);

export default mongoose.model('User', userSchema); 