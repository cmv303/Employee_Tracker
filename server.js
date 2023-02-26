//This file is the entry point of the application. 

//dependencies required
// const connection = require("./connection");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "select",
        choice: ["View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee"
            ],
        default:"View all employees"
    },
  ])
  .then((answer) => {
    console.info("select choice:", select)
  });
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// module.exports = connection;


