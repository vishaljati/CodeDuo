import mongoose from 'mongoose';
import { DB_Name } from '../constant.js';


const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );

    console.log(
      '\n MONGODB Connected Successfully!! \n DB HOST :',
      `${connectionInstant.connection.host}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log('MONGODB CONNECTION FAILED :', error.message);
      process.exit(1);
    }
    console.log('MONGODB CONNECTION FAILED :', error);
    process.exit(1);
  }
};

export { connectDB };