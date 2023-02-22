//dependencies required
const mysql = require ('mysql2');
const dotenv = require ('dotenv');
const { createConnection } = require('net');
dotenv.config();

//stores mysql connection in a variable and attaches a promise method to it, allowing asynchoronous functions to be used instead of callbacks from here on out
const dbConnection = mysql.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//async function to get department information
async function getDeparment(){
    const [rows] = await dbConnection.query("SELECT * FROM department")
    return rows
}

//async function to create department information
async function createDeparment(id, name) {
    await createConnection(`
    INSERT INTO department (id, name)
    VALUES (?, ?)
    `, [id, name])
    return getDeparment();
}