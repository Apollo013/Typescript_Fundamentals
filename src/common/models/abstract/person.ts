import {createGuid} from "../../../utilities/string-utilities"

export abstract class Person {
    /*------------------------------------------------------------------------------
    PROPERTIES
    ------------------------------------------------------------------------------*/
    private Guid: string = null;
    private FirstName: string;
    private LastName: string;
    private Dob: Date;

    /*------------------------------------------------------------------------------
    CONSTRUCTORS
    ------------------------------------------------------------------------------*/
    protected constructor(){
        this.Guid = createGuid();
    }

    /*------------------------------------------------------------------------------
    ACCESSORS
    ------------------------------------------------------------------------------*/
    public get GetGuid(): string {
        return this.Guid;
    }
    
    public get GetFirstName(): string {
        return this.FirstName;
    }

    public get GetLastName(): string {
        return this.LastName;
    }

    public get GetDob(): Date {
        return this.Dob;
    }

    protected set SetFirstName(value: string){
        this.FirstName = value;
    }

    protected set SetLastName(value: string){
        this.LastName = value;
    }    

    protected set SetDob(value: Date){
        this.Dob = value;
    }

    /*------------------------------------------------------------------------------
    Methods
    ------------------------------------------------------------------------------*/   
    public FullName() : string{
        return this.FirstName + ' ' + this.LastName;
    } 

    public ToString() : string {
        return '\nName:\t' + this.FullName() + '\nDOB:\t' + this.Dob.toDateString() + '\nGuid:\t' + this.Guid
    }
}
