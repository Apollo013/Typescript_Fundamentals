import {Employee} from "./models/employee";

var emp1 = Employee.Create("John", "Williams", new Date(), "8225995857A");

console.log(emp1.ToString());