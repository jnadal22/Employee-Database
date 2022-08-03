const dbconnection = require("../server");

class DbHelper {
  constructor(connection) {
    this.connection = connection;
  }

  getAllDepartments() {
    return this.connection.promise().query("select * from department;");
  }
  getAllRoles() {
    return this.connection.promise().query("select * from role;");
  }

  getAllEmployees() {
    return this.connection.promise().query("select * from employee;");
  }
  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ? ", role);
  }
  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
  updateEmployee(role_id, employee_id) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        role_id,
        employee_id,
      ]);
  }
}
module.exports = new DbHelper(dbconnection);
