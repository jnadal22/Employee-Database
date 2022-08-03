const inquirer = require("inquirer");
// const Choices = require("inquirer/lib/objects/choices");
const mysql = require("mysql2");
const { updateEmployee } = require("./db/index");
const DbHelper = require("./db/index");
const cTable = require('console.table');




const MainQuestions = () => {
  inquirer
    .prompt([
      {
        type: `list`,
        message: "please select and option",
        choices: [
          "view all departments",
          "view all roles",
          "view all employee",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
        name: "menuOptions",
      },
    ])
    .then((answers) => {
      switch (answers.menuOptions) {
        case "view all departments":
          viewDepartments();
          break;
        case "view all roles":
          viewRoles();
          break;
        case "view all employee":
          viewEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee;
          break;
        case "update an employee role":
          updateEmployeeRole();
          break;
        default:
          console.log("something broke");
          break;
      }
    });
};

function viewDepartments() {
  DbHelper.getAllDepartments().then(([rows]) => {
    console.table(rows);
  });
  MainQuestions();
}

function viewRoles() {
  DbHelper.getAllRoles().then(([rows]) => {
    console.table(rows);
  });
  MainQuestions();
}

function viewEmployees() {
  DbHelper.getAllEmployees().then(([rows]) => {
    console.table(rows);
  });
  MainQuestions();
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "what is the name of the department to add?",
      },
    ])
    .then((answers) => {
      DbHelper.addDepartment(answers).then(() => MainQuestions());
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "what is the salary for this role?",
      },
      {
        type: "input",
        name: "department",
        message: "what department does this role belong to?",
      },
    ])
    .then((answers) => {
      DbHelper.addRole(answers).then(() => MainQuestions());
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "what is the employees first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "what is the employees last name?",
      },
      {
        type: "input",
        name: "employee_role",
        message: "what is the employees role?",
      },
      {
        type: "input",
        name: "manager",
        message: "who is the employees manager?",
      },
    ])
    .then((answers) => {
      DbHelper.addEmployee(answers).then(() => MainQuestions());
    });
}

function updateEmployeeRole() {
  let roles = [];
  let employee = [];

  DbHelper.getAllRoles().then(([roleRows]) => {
    roles = roleRows;
    const roleNames = roleRows.map((data) => data.title);

    DbHelper.getAllEmployees().then(([employeeRows]) => {
      employee = employeeRows;

      const employeeNames = employeeRows.map(
        (data) => `${data.first_name} ${data.last_name}`
      );

      inquirer
        .prompt([
          {
            type: "rawlist",
            name: "employeeUpdate",
            message: "which employee would you like to update?",
            choices: employeeNames,
          },
          {
            type: "rawlist",
            name: "newRole",
            message: "what is the new role for the employee?",
            choices: roleNames,
          },
        ])
        .then((answers) => {
          const employeeId = employee.filter((data) => {
            if (
              `${data.first_name} ${data.last_name}` === answers.employeeUpdate
            ) {
              return true;
            }
          })[0]["id"];

          const roleId = roles.filter((data) => {
            if (data.title === answers.newRole) {
              return true;
            }
          })[0]["id"];

          DbHelper.updateEmployee(roleId, employeeId).then(() =>
            MainQuestions()
          );
        });
    });
    MainQuestions();
  });
}

MainQuestions();
