import {Employee} from "./models/employee";
import {PayTypeEnum} from "../utilities/enums";
import {PayRollService} from "./services/payroll-service";

var emp1 = Employee.Create("John", "Williams", new Date(), "8225995857A", 25, PayTypeEnum.Hourly, "Production Operative");
var mng1 = Employee.Create("Mary", "Gonnolly", new Date(), "3658425857A", 50000, PayTypeEnum.Salary, "Suppply Chain Manager");

var payRollService = new PayRollService();

console.log(emp1.ToString());
console.log("Earned:\t" + payRollService.CalculatePay(emp1.GetEarnings, 45));

console.log(mng1.ToString());
console.log("Earned:\t" + payRollService.CalculatePay(mng1.GetEarnings));