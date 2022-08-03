DROP DATABASE IF EXISTS business_db;

CREATE DATABASE business_db;

USE business_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    -- THIS ONE BELOW HOLDS DEPARTEMENT NAME
    name VARCHAR (100)
);

CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL,
    -- TO HOLD ROLE TITLE
    title VARCHAR (100) NOT NULL, 
    -- TO HOLD ROLE SALARY
    salary DECIMAL NOT NULL,
    -- TO HOLD REFERENCE TO DEPARTMENT ROLE BELONGS TO
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL,
    -- TO HOLD EMPLOYEE FIRST NAME
    first_name VARCHAR (30) NOT NULL,
    -- TO HOLD EMPLOYEE LAST NAME
    last_name VARCHAR(30) NOT NULL,
    -- TO HOLD REFERENCE TO EMPLOYEE ROLE
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    -- to hold reference to another employee that is the manager of the current employee(null if the employee had no manager)
    manager_id INT 
);