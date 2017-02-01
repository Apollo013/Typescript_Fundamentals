import {PayRollServiceContract} from "./contracts/payroll-contract";
import {PayTypeEnum} from "../../utilities/enums";

export class PayRollService implements PayRollServiceContract{
    CalculatePay(earnings: {Rate: number, PayType: number}, hoursWorked?: number) : number {
        if(earnings.PayType == PayTypeEnum.Salary){
            return Math.round(earnings.Rate / 52);
        }
        else if(earnings.PayType == PayTypeEnum.Hourly){
            if(hoursWorked > 0){
                return Math.round(earnings.Rate * hoursWorked);
            }
        }
        return 0;
    }
}