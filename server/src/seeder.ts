import dotenv from "dotenv";
import chalk from "chalk";
import users from "./data/users";
import products from "./data/products";
import User from "./models/userModel";
import Order from "./models/orderModel";
import Product from "./models/productModel";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((products) => {
      return { ...products, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log(chalk.green.inverse("Data imported!"));
    process.exit();
  } catch (err) {
    console.error(chalk.red.inverse(`${err}`));
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log(chalk.green.inverse("Data imported!"));
    process.exit();
  } catch (err) {
    console.error(chalk.red.inverse(`${err}`));
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
