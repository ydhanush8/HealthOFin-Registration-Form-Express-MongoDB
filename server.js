import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/formRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'))
app.use(express.json());

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("Connected to DB")
        
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        }); 
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

connectDB()

app.use('/api/users', userRoutes);

