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
    choices: ["Add a department", "Add a role", "Add an employee", "Main menu"],
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
      start();
    } else if (view === "View roles") {
      try {
        const rows = await dbConnection.query(
          "SELECT role.id, role.title, role.salary, department.dept_name FROM role JOIN department ON role.department_id = department.id"
        );
        console.log("ROWSSSSS", rows);
        console.table("All records in role table:", rows[0]);
      } catch (error) {
        console.error("Error executing query:", error);
      }
      start();
    } else if (view === "View employees") {
      try {
        const rows = await dbConnection.query(
          "SELECT employee.first_name, employee.last_name, role.title, department.dept_name AS department, role.salary, CONCAT (manager.first_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id"
        );
        console.log("Employee????", rows);
        console.table("All records in employee table:", rows[0]);
      } catch (error) {
        console.error("Error executing query:", error);
      }
      start();
    } else if (view === "Main menu") {
      start();
    }
  } else if (main === "Add") {
    const { add } = await inquirer.prompt(addMenu);
    if (add === "Add a department") {
      try {
        const { deptName } = await inquirer.prompt({
          type: "input",
          name: "deptName",
          message: "What is the name of the department you would like to add?",
        });
        console.log("Department Name", deptName);
        const result = await dbConnection.query(
          `INSERT INTO department (dept_name) VALUES (?)`,
          [deptName]
        );
        console.table(
          `department ${deptName} added with ID ${result.id}`,
          result[0]
        );
      } catch (error) {
        console.error("Error executing query:", error);
      }
      start();
    } else if (add === "Add a role") {
      try {
        const { roleName, roleSalary } = await inquirer.prompt([
          {
            type: "input",
            name: "roleName",
            message: "What is the name of the role you would like to add?",
          },
          {
            type: "input",
            name: "roleSalary",
            message: "What is the salary of the role you would like to add?",
          }
        ]);
        console.log("Role Name, role salary", roleName, roleSalary);
        const rows = await dbConnection.query(
          `INSERT INTO role (title, salary) VALUES (?, ?)`,
          [roleName, roleSalary]
        );
        console.table(
          `role added!`,
          { role: roleName, salary: roleSalary }, rows[0]
        );
      } catch (error) {
        console.error("Error executing query:", error);
      }
      start();
    } else if (add === "Add an employee") {
      try {
        const { firstName, lastName, roleId, managerId } =
          await inquirer.prompt([
            {
              type: "input",
              name: "firstName",
              message: "What is the employee's first name?",
            },
            {
              type: "input",
              name: "lastName",
              message: "What is the employee's last name?",
            },
            {
              type: "input",
              name: "roleId",
              message: "What is the employee's role ID?",
            },
            {
              type: "input",
              name: "managerId",
              message: "What is the employee's manager ID?",
            },
          ]);
        const result = await dbConnection.query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
          [firstName, lastName, roleId, managerId]
        );
        console.table(
          `Employee ${firstName} ${lastName} added with ID ${result.insertId}`
        );
      } catch (error) {
        console.error("Error executing query:", error);
      }
      start();
      //call function
    } else if (add === "Main menu") {
      start(); //break out of while loop and return to main menu
    }
  } else if (main === "Update") {
    const { update } = await inquirer.prompt(updateMenu);

    if (update === "Update an employee") {
      try {
        const { employeeId } = await inquirer.prompt({
          type: 'input',
          name: 'employeeId',
          message: 'Enter the ID of the employee you want to update:'
        });
    
        // Retrieve the existing employee information from the database
        const [rows] = await dbConnection.query('SELECT * FROM employee WHERE id = ?', [employeeId]);
    
        if (rows.length === 0) {
          console.log(`No employee found with ID ${employeeId}.`);
          return;
        }
        const { first_name, last_name } = rows[0];
    
        // Prompt the user to enter the new information for the employee
        const { newFirstName, newLastName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'newFirstName',
            message: `Enter the employee's new first name (${first_name}):`,
          },
          {
            type: 'input',
            name: 'newLastName',
            message: `Enter the employee's new last name (${last_name}):`,
          }
        ]);
    
        // Update the employee record in the database with the new information
        const [result] = await dbConnection.query(
          'UPDATE employee SET first_name = ?, last_name = ? WHERE id = ?',
          [newFirstName, newLastName, employeeId]
        );
        console.table(`Employee updated!`, result[0]);
      } catch (error) {
        console.error("Error executing query:", error);
      }
      start();
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
