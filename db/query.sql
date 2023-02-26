-- USE employee_tracker;
-- --selects all information from roles table. Joins roles TO employee table using their respective id columbs.
-- SELECT *
-- FROM roles
-- JOIN employee ON roles.id = employee.role_id;


-- --self join (within the same table): employees to THEIR managers
-- SELECT *
-- FROM employee
-- JOIN employee ON employee.manager_id = employee.id;


-- -- sel join (within the same table): employees who have the role of manager to their own unique id. First step is to join the employee table to itself, linking the employee id to their manager's id. But since not all employees are managers, we need to do a LEFT JOIN so that even those employees who are not managers will be returned in our query. Once we have this list compiled, then we can join the employee table to the role table, by using the role_id listed in the employee table to the id in the role table.
-- SELECT*
-- FROM employee
-- LEFT JOIN employee ON employee.manager_id = employee.id
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON  role.department_id = department.id;

