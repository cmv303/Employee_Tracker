//dependencies required
const dbConnection = require("./connection");
console.log("Am i connected", dbConnection)
const inquirer = require("inquirer");
console.log("Am I inquiring?", inquirer)
const consoleTable = require("console.table"); //!where should I call
console.log("am i a table?", consoleTable)

// Define the main menu using inquirer
const mainMenu = [{
    type: "list",
    message: "What would you like to do?",
    name: "main",
    choices: [
        "View",
        "Add",
        "Update",
        "Quit"
    ]
}];

// Define the view menu using inquirer
const viewMenu = [{
    type: "list",
    message: "What would you like to view?",
    name: "view",
    choices: [
        "View departments",
        "View roles",
        "View employees",
        "Main menu"
    ]
}];

// Define the add menu using inquirer
const addMenu = [{
    type: "list",
    message: "What would you like to add?",
    name: "add",
    choices: [
        "Add a department",
        "Add a roles",
        "Add an employee",
        "Main menu"
    ]
}];

// Define the update menu using inquirer
const updateMenu = [{
    type: "list",
    message: "What would you like to update?",
    name: "update",
    choices: [
        "Update an employee",
        "Main menu"
    ]
}]


// Define the start function, which is the main entry point of the application
async function start() {
    while (true) {
        const { main } = await inquirer.prompt(mainMenu);
        
        if (main === "View") {
            while (true) {
                const { view } = await inquirer.prompt(viewMenu);

            if (view === "View departments") {
                //call function
            } else if (view === "View roles") {
                //call function
            } else if (view === "View employees") {
                //call function
            } else if (view === "Main menu") {
                break; //break out of while loop and return to main menu
            }
        }
    } else if (main === "Add") {
        while (true) {
            const { add } = await inquirer.prompt(addMenu);

            if (add === "Add a department") {
                //call function
            } else if (add === "Add a role") {
                //call function
            } else if (add === "Add an employee") {
                //call function
            } else if (add === "Main menu") {
                break; //break out of while loop and return to main menu
            }
        }
    } else if (main === "Update") {
        while (true) {
            const { update } = await inquirer.prompt(updateMenu);

            if (update === "Update an employee") {
                //call function
            } else if (update === "Main menu") {
                break; //break out of while loop and return to main menu
            }
        }
    } else if (main === "Quit") {
        //exit the node.js process entirely
        process.exit(0);
    }
    }
}

//call the start function
   start();
    



// async viewAllDepartments() {
//         try{
//             const connection = await dbConnection;
//             console.log("WHY IS THIS HERE?", connection);
//             const [rows] = await connection.query('SELECT * FROM department');
//             console.table('All records in department table:', rows);
//             this.start();
//         } catch (error) {
//             console.error('Error executing query:', error)
//         }
//     }

// //!query not correct.
// async viewAllRoles() {
//     try{
//         const connection = await dbConnection;
//         const [rows] = await connection.query('SELECT * FROM role');
//         console.table('All records in roles table:', rows);
//         this.start();
//     } catch (error) {
//         console.error('Error executing query:', error);
//     }
// }

// async viewAllEmployees() {
//     try{
//         const connection = await dbConnection;
//         const [rows] = await connection.query('SELECT * FROM employee');
//         console.table('All records in employee table:', rows);
//         this.start();
//     } catch (error) {
//         console.error('Error executing query:', error);
//     }
// }

// //! how do I connect this to query.sql?' NOT SURE ABOUT MY QUERIES HERE
// async addADepartment() {
//     try{
//         const connection = await dbConnection;
//         const [rows] = await connection.query(`INSERT INTO department VALUES ?`);
//         console.table('department added!', rows);
//         this.start();
//     } catch (error) {
//         console.error('Error executing query:', error)
//     }
// }

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


   
