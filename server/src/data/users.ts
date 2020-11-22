import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "asdaf1@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "UserUno",
    email: "asdaf2@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "UserDos",
    email: "asdaf3@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
