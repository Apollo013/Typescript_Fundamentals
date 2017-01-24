"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require("../../common/models/abstract/person");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super.call(this) || this;
        _this.SSN = null;
        return _this;
    }
    Employee.Create = function (firstName, lastName, dob, ssn) {
        if (!firstName) {
            throw "Please supply a first name";
        }
        if (!lastName) {
            throw "Please supply a last name";
        }
        if (!dob) {
            throw "Please supply date of birth";
        }
        var emp = new Employee();
        emp.SetDob = dob;
        emp.SetFirstName = firstName;
        emp.SetLastName = lastName;
        emp.SetSSN = ssn;
        return emp;
    };
    Object.defineProperty(Employee.prototype, "SetSSN", {
        set: function (value) {
            this.SSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + '\nSSN:\t' + this.SSN;
    };
    return Employee;
}(person_1.Person));
exports.Employee = Employee;
