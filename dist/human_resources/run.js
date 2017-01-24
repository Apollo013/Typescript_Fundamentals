"use strict";
var employee_1 = require("./models/employee");
var emp1 = employee_1.Employee.Create("John", "Williams", new Date(), "8225995857A");
console.log(emp1.ToString());
