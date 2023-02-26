// //dependencies required
// const connection = require("./connection");
// const inquirer = require("inquirer");
// const consoleTable = require('console.table');

// class EmployeeTracker {
//     constructor() {
//       this.connection = connection;
//     }
  
//     start() {
//       inquirer.prompt({
//         name: 'action',
//         type: 'list',
//         message: 'What would you like to do?',
//         choices: [
//           'View all departments',
//           'View all roles',
//           'View all employees',
//           'Add a department',
//           'Add a role',
//           'Add an employee',
//           'Update an employee role'
//         ]
//       }).then(answer => {
//         switch (answer.action) {
//           case 'View all departments':
//             this.viewAllDepartments();
//             break;
//           case 'View all roles':
//             this.viewAllRoles();
//             break;
//           case 'View all employees':
//             this.viewAllEmployees();
//             break;
//           case 'Add a department':
//             this.addDepartment();
//             break;
//           case 'Add a role':
//             this.addRole();
//             break;
//           case 'Add an employee':
//             this.addEmployee();
//             break;
//           case 'Update an employee role':
//             this.updateEmployeeRole();
//             break;
//           default:
//             console.log(`Invalid action: ${answer.action}`);
//             break;
//         }
//       });
//     }
  
//     viewAllDepartments() {
//       this.connection.query(
//         'SELECT * FROM department',
//         (err, results) => {
//           if (err) throw err;
//           console.table(results);
//           this.start();
//           console.log("start function department select all", start)
//         }
//       );
//     }}
//     console.log("Will you print me?")


// // module.exports = connection;