//dependencies required
const dbConnection = require("./connection");
console.log("Am i connected", dbConnection);
const inquirer = require("inquirer");
console.log("Am I inquiring?", inquirer);
const consoleTable = require("console.table");
console.log("am i a table?", consoleTable);

// Define the main menu using inquirer
const mainMenu = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "main",
    choices: ["View", "Add", "Update", "Quit"],
  },
];

// Define the view menu using inquirer
const viewMenu = [
  {
    type: "list",
    message: "What would you like to view?",
    name: "view",
    choices: ["View departments", "View roles", "View employees", "Main menu"],
  },
];

// Define the add menu using inquirer
const addMenu = [
  {
    type: "list",
    message: "What would you like to add?",
    name: "add",
    choices: [
      "Add a department",
      "Add a roles",
      "Add an employee",
      "Main menu",
    ],
  },
];

// Define the update menu using inquirer
const updateMenu = [
  {
    type: "list",
    message: "What would you like to update?",
    name: "update",
    choices: ["Update an employee", "Main menu"],
  },
];

// Define the start function, which is the main entry point of the application
async function start() {
    const { main } = await inquirer.prompt(mainMenu);

    if (main === "View") {
        const { view } = await inquirer.prompt(viewMenu);

        if (view === "View departments") {
          try {
            const rows = await dbConnection.query("SELECT * FROM department");
            console.log("rows", rows);
            console.table("All records in department table:", rows[0]);
          } catch (error) {
            console.error("Error executing query:", error);
          }
          start.bind(this)();
        } else if (view === "View roles") {
          try {
            const rows = await dbConnection.query("SELECT role.id, role.title, role.salary, department.dept_name FROM role JOIN department ON role.department_id = department.id");
            console.log("ROWSSSSS", rows)
            console.table("All records in role table:", rows [0]);
          } catch (error) {
            console.error("Error executing query:", error);
          }
          start.bind(this)();
        } else if (view === "View employees") {
          try {
            const rows = await dbConnection.query("SELECT employee.first_name, employee.last_name, role.title, department.dept_name AS department, role.salary, CONCAT (manager.first_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id");
            console.log("Employee????", rows)
            console.table("All records in employee table:", rows [0]);
          } catch (error) {
            console.error("Error executing query:", error);
          }
          start.bind(this)();
        } else if (view === "Main menu") {
          start();
        }
      
    } else if (main === "Add") {
        const { add } = await inquirer.prompt(addMenu);

        if (add === "Add a department") {
            try {
                //!Not pushing to db)
                const { dept_name } = await inquirer.prompt({
                    type: "input",
                    name: "deptName",
                    message:"What is the name of the department you would like to add?",
                })
                const result = await dbConnection.query("INSERT INTO department (dept_name) VALUES (?)", [dept_name]);
                console.table("Department '${deptName}' added with ID ${result.id}", result);
              } catch (error) {
                console.error("Error executing query:", error);
              }
              start.bind(this)();
          //call function
        } else if (add === "Add a role") {
          //call function
        } else if (add === "Add an employee") {
            try {
                //! have to reformat once I get the above ones to work
                const rows = await dbConnection.query("INSERT INTO employee VALUES (first_name,last_name)");
                console.table("What is the employee name you would like to add? Format required: first name, last name:", rows);
              } catch (error) {
                console.error("Error executing query:", error);
              }
              start.bind(this)();
          //call function
        } else if (add === "Main menu") {
          start(); //break out of while loop and return to main menu
        }
    } else if (main === "Update") {
        const { update } = await inquirer.prompt(updateMenu);

        if (update === "Update an employee") {
          //call function
        } else if (update === "Main menu") {
          start(); //break out of while loop and return to main menu
        }
    } else if (main === "Quit") {
      //exit the node.js process entirely
      process.exit(0);
    }
}

//call the start function
start();


// //! how do I connect this to query.sql?' NOT SURE ABOUT MY QUERIES HERE
// async addARole() {
//     try{
//         const connection = await dbConnection;
//         const [rows] = await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, salary, department_id)');
//         console.table('role added!', rows);
//         this.start();
//     } catch (error) {
//         console.error('Error executing query:', error)
//     }
// }
// //! how do I connect this to query.sql? NOT SURE ABOUT MY QUERIES HERE
// async addAnEmployee() {
//     try{
//         const connection = await dbConnection;
//         const [rows] = await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, role_id, manager_id');
//         console.table('employee added!', rows);
//         this.start();
//     } catch (error) {
//         console.error('Error executing query:', error)
//     }
// }
// //! how do I connect this to query.sql? NOT SURE ABOUT MY QUERIES HERE
// async updateAnEmployee() {
//     try{
//         const connection = await dbConnection;
//         const [rows] = await connection.query('UPDATE employee SET role_id = new role_id WHERE = employee_id');
//         console.table('employee updated!', rows);
//         this.start();
//     } catch (error) {
//         console.error('Error executing query:', error)
//     }
// }

// const questionnaire = new Questionnaire();
// questionnaire.start();
