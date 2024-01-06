import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email:"admin@email.com",
        password: bcrypt.hashSync("password", 10),
        isAdmin: true,
    },
    {
        name: "Hendika",
        email:"hendika@email.com",
        password: bcrypt.hashSync("password", 10),
        isAdmin: false,
    },
    {
        name: "Nero",
        email:"nero@email.com",
        password: bcrypt.hashSync("password", 10),
        isAdmin: false,
    },
];

export default users;