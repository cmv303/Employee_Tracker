//dependencies required
const mysql = require ('mysql2');

//stores mysql connection in a variable and attaches a promise method to it, allowing asynchoronous functions to be used instead of callbacks from here on out
const dbConnection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
},
console.log('connected to my localhost')
).promise();