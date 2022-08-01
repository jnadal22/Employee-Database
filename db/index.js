const dbconnection = require('../server');

class DbHelper {
    constructor (connection) {
        this.connection = connection;
    }

    getAllDepartments (){
        return this.connection.promise().query(
            'select * from department;'
        )
    }
getAllRoles (){
    return this.connection.promise().query(
        'select * from department;'
    )
}

getAllEmployees (){
    return this.connection.promise().query(
        'select * from employees;'
    )
}

}
module.exports = new DbHelper(dbconnection);