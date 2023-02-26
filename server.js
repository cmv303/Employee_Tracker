//This file is the entry point of the application. 

//dependencies required
const dbConnection = require("./connection");
const inquirer = require("inquirer");
const consoleTable = require("console.table"); //!where should I call


class Questionnaire {
    async start() {
    const { select } = await inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do?",
        name: "select",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee",
            "Quit"
            ],
        default:"View all employees"
        },
    ]);

switch (select) {
    case 'View all departments':
        await this.viewAllDepartments();
        break;
    case 'View all roles':
        await this.viewAllRoles();
        break;
    case 'View all employees':
        await this.viewAllEmployees();
        break;
    case 'Add a department':
        await this.addADepartment();
        break;
    case 'Add a role':
        await this.addARole();
        break;
    case 'Add an employee':
        await this.addAnEmployee();
        break;
   case 'Update an employee':
        await this.updateAnEmployee();
        break;
    case 'Quit':
        console.log('See ya!')
        return;
    }
}

async viewAllDepartments() {
        try{
            const connection = await dbConnection;
            const [rows] = await connection.query('SELECT * FROM department');
            console.table('All records in department table:', rows);
            this.start();
        } catch (error) {
            console.error('Error executing query:', error)
        }
    }


async viewAllRoles() {
    try{
        const connection = await dbConnection;
        const [rows] = await connection.query('SELECT * FROM roles');
        console.table('All records in roles table:', rows);
        this.start();
    } catch (error) {
        console.error('Error executing query:', error);
    }
}

async viewAllEmployees() {
    try{
        const connection = await dbConnection;
        const [rows] = await connection.query('SELECT * FROM employee');
        console.table('All records in employee table:', rows);
        this.start();
    } catch (error) {
        console.error('Error executing query:', error);
    }
}

//! how do I connect this to query.sql?' NOT SURE ABOUT MY QUERIES HERE
async addADepartment() {
    try{
        const connection = await dbConnection;
        const [rows] = await connection.query('INSERT INTO department VALUES ?');
        console.table('department added!', rows);
        this.start();
    } catch (error) {
        console.error('Error executing query:', error)
    }
}

//! how do I connect this to query.sql?' NOT SURE ABOUT MY QUERIES HERE
async addARole() {
    try{
        const connection = await dbConnection;
        const [rows] = await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, salary, department_id)');
        console.table('role added!', rows);
        this.start();
    } catch (error) {
        console.error('Error executing query:', error)
    }
}
//! how do I connect this to query.sql? NOT SURE ABOUT MY QUERIES HERE
async addAnEmployee() {
    try{
        const connection = await dbConnection;
        const [rows] = await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, role_id, manager_id');
        console.table('employee added!', rows);
        this.start();
    } catch (error) {
        console.error('Error executing query:', error)
    }
}
//! how do I connect this to query.sql? NOT SURE ABOUT MY QUERIES HERE
async updateAnEmployee() {
    try{
        const connection = await dbConnection;
        const [rows] = await connection.query('UPDATE employee SET role_id = new role_id WHERE = employee_id');
        console.table('employee updated!', rows);
        this.start();
    } catch (error) {
        console.error('Error executing query:', error)
    }
}

};

const questionnaire = new Questionnaire();
questionnaire.start();



