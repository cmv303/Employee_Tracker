CREATE DATABASE employee_tracker;
USE employee_tracker;


CREATE TABLE department (
    --every department will be unique, but within every department you will have multiple employees and multiple roles, all which can overlap
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE role (
    --every department CAN have this role
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    --an employee COULD be linked with various departments, but probably only has 1 role
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT DEFAULT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

--MAKE SURE TO JOIN THESE TABLES USING FOREIGN KEY. LOOK AT ACTIVITY 20 FOR A GUIDE