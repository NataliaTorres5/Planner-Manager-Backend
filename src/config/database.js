import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
};

export default connectDB