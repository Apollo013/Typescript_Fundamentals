import {Person} from "../../common/models/abstract/person"
import {Earnings} from "../services/contracts/payroll-contract";

export class Employee extends Person{
    /*------------------------------------------------------------------------------
    PROPERTIES
    ------------------------------------------------------------------------------*/
    private SSN: string = null;
    private Rate: number = 0;
    private PayType: number = 1;
    private Position: string = null;
    
    /*------------------------------------------------------------------------------
    CONSTRUCTORS
    ------------------------------------------------------------------------------*/
    private constructor(){
        super();
    }

    public static Create(firstName: string, lastName: string, dob: Date, ssn: string, rate: number, paytype: number, position: string) : Employee {
        // Validate
        if(!firstName){
            throw "Please supply a first name";
        }
        if(!lastName){
            throw "Please supply a last name";
        }
        if(!dob){
            throw "Please supply date of birth";
        } 
        if(!rate){
            throw "Please supply rate";
        } 
        if(!paytype){
            throw "Please supply pay type";
        }         
        if(!position){
            throw "Please supply position";
        }         

        // Create new employee object and return it
        var emp = new Employee();
        emp.SetDob = dob;
        emp.SetFirstName = firstName;
        emp.SetLastName = lastName;
        emp.SetSSN = ssn;
        emp.Rate = rate;
        emp.PayType = paytype;
        emp.Position = position;
        
        return emp;
    }

    /*------------------------------------------------------------------------------
    ACCESSORS
    ------------------------------------------------------------------------------*/
    protected set SetSSN(value: string){
        this.SSN = value;
    }

    public get GetEarnings() : Earnings{
        var earnings = {Rate: 0, PayType: null};
        earnings.Rate = this.Rate;
        earnings.PayType = this.PayType;
        return earnings;
    }

    public ToString(): string{
        return super.ToString() + '\nSSN:\t' + this.SSN; 
    }
}