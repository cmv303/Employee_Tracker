--departments
INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('HR'),
('Legal');


--roles
INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 110000.00, 2),
('Lawyer', 200000.00, 4),
('Accountant', 78000.00, 3),
('Salesperson' 55000.00, 1);


--employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Alex', 'Barrett', 1, 3),
('Erin', 'Sawyer', 3, 3),
('Sam', 'Harper', 2, NULL),
('Sarah', 'Johnson', 3, NULL),
('Carl', 'Vega', 4, 2)


