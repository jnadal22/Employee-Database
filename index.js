const inquirer = require("inquirer");
// const Choices = require("inquirer/lib/objects/choices");
const mysql = require("mysql2");
const DbHelper = require ('./db/index')



inquirer
.prompt([
{
    type: `list`,
    message: 'please select and option',
    choices: ["view all departments", "view all roles", "view all employees"],
    //  "add a department", "add a role", "add an employee", "update an employee role"],
    name: 'menuOptions',
}
])
    .then((answers) => {
        console.log(answers)
        switch(answers.menuOptions) {
            case "view all departments":
              viewDepartments();
              break;
            case "view all roles":
              viewRoles();
              break;
            case "view all employess":
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
                case "update an employee":
                    updateEmployeeRole();
                    break;
              default: 
              console.log('something broke');
              break;
          }
    });


    function viewDepartments() {
        DbHelper.getAllDepartments().then(([rows]) => {
            console.log(rows)
        })
    };


    function viewRoles(){
        DbHelper.getAllRoles().then(([rows]) => {
            console.log(rows)
        })
    };

    function viewEmployees(){
        DbHelper.getAllEmployees().then(([rows]) => {
            console.log(rows)
        })
    }

    function addDepartment(){

    }

    function addRole(){

    }

    function addEmployee(){

    }

    function updateEmployeeRole (){

    }

