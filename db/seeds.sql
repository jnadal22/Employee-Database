INSERT INTO department(id,name)
VALUES  (1, 'Sales'),
        (2, 'Engineering'),
        (3, 'Operations'),
        (4, 'Finance'),
        (5, 'Legal');

INSERT INTO role (id,title,salary,department_id)
VALUE  (1, 'Software Engineer', 100000, 2),
        (2, 'Lead Engineer', 150000, 2),
        (3, 'Account Manager', 170,000, 4 ),
        (4, 'Accountant', 125,000, 4),
        (5,'sales rep', 100000, 1),
        (6,'General Manager', 200000,3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (1,'dwayne', 'johson', 2, NULL),
        (2, 'Jordan', 'Nadal', 6, NULL),
        (3, 'tom', 'jones', 3, null),
        (4, 'betty', 'white',5,null),
        (5, 'henry', 'mark', 4, null),
        (6, 'danny', 'smith',1, null);
        