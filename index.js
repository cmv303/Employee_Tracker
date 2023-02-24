//dependencies required
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Questionnaire = {
   addToQuestions: [
      {
        type: "list",
        message: "What would you like to add?",
        name: "primary add question",
        choices: [
          "Add Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Quit",
        ],
        default: "Add Department",
      },
      {
        type: "input",
        message: "What is the name of the department you would like to add?",
        name: "new department",
        default: "Philosophy",
      },
      {
        type: "list",
        message: "What would you like to add?",
        name: "primary add question",
        choices: [
            "Add Department",
            "Add a Role",
            "Add an Employee",
            "Quit"
            ],
        default: "Add an Employee",
      },
      {
        type: "input",
        message: "What is the name of the Employee you would like to add?",
        name: "employee name",
        default: "Evelyn Mitchell",
      },
      {
        type: "list",
        message: "What would you like to add?",
        name: "primary add question",
        choices: [
          "Add Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Quit",
        ],
        default: "Add a Role",
      },
      {
        type: "input",
        message: "What is the name of the role you would like to add?",
        name: "new role",
        default: "Staff",
      },
    ],

viewAllQuestions: [
      {
        type: "list",
        message: "What would you like to view?",
        name: "primary view question",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Quit",
        ],
        default: "View all Employees",
      },
    ],

   updateQuestions: [
      {
        type: "list",
        message: "What would you like to update?",
        name: "update",
        choices: ["Update Employee Role", "Update Salary"],
        default: "Update Salary",
      },
    ],

  async askAddQuestions() {
    const answers = await inquirer.prompt(this.addToQuestions);
    console.log(answers);
  },

  async askViewQuestions() {
    const answers = await inquirer.prompt(this.viewAllQuestions);
    console.log(answers);
  },

  async askUpdateQuestions() {
    const answers = await inquirer.prompt(this.updateQuestions);
    console.log(answers);
  },
};

const questionnaire = Object.create(Questionnaire);

async function run() {
    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "action",
                choices: [
                    "Add",
                    "View",
                    "Update",
                    "Quit",
                ],
                default: "Add",
            }
        ]);

        if (action === "Add") {
            await questionnaire.askAddQuestions();
        } else if (action === "View") {
            await questionnaire.askViewQuestions();
        } else if (action === "Update") {
            await questionnaire.askUpdateQuestions();
        } else {
            break;
        }
    }
}

run();

module.exports = questionnaire;

//*notes to self: this works, but does not give a way back to the original question, essentially forcing the user to answer all questions. I need to figure out how to give a back choice, and for them to navigate as they wish. Of course, then this needs to be joined to the actual tables and database, which i still need to build.
