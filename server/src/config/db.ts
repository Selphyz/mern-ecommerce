import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(chalk.cyan.underline(`DB connected: ${conn.connection.host}`));
  } catch (err) {
    console.log(chalk.red.underline.bold(`Error: ${err.message}`));
    process.exit(1);
  }
};

export default connectDB;
