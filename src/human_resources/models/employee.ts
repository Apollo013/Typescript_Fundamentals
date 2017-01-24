import {Person} from "../../common/models/abstract/person"

export class Employee extends Person{
    /*------------------------------------------------------------------------------
    PROPERTIES
    ------------------------------------------------------------------------------*/
    private SSN: string = null;

    /*------------------------------------------------------------------------------
    CONSTRUCTORS
    ------------------------------------------------------------------------------*/
    private constructor(){
        super();
    }

    public static Create(firstName: string, lastName: string, dob: Date, ssn: string) : Employee {
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

        // Create new employee object and return it
        var emp = new Employee();
        emp.SetDob = dob;
        emp.SetFirstName = firstName;
        emp.SetLastName = lastName;
        emp.SetSSN = ssn;
        return emp;
    }

    /*------------------------------------------------------------------------------
    ACCESSORS
    ------------------------------------------------------------------------------*/
    protected set SetSSN(value: string){
        this.SSN = value;
    }

    public ToString(): string{
        return super.ToString() + '\nSSN:\t' + this.SSN; 
    }
}