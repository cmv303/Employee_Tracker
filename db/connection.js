//This file contains database connection setup code

//dependencies required
const mysql = require ('mysql2/promise');
const dotenv = require ('dotenv');
dotenv.config();

//stores mysql connection in a variable and attaches a promise method to it, allowing asynchoronous functions to be used instead of callbacks from here on out
const dbConnection = mysql.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

module.exports = dbConnection;