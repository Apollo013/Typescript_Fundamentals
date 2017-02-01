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
        _this.Rate = 0;
        _this.PayType = 1;
        _this.Position = null;
        return _this;
    }
    Employee.Create = function (firstName, lastName, dob, ssn, rate, paytype, position) {
        if (!firstName) {
            throw "Please supply a first name";
        }
        if (!lastName) {
            throw "Please supply a last name";
        }
        if (!dob) {
            throw "Please supply date of birth";
        }
        if (!rate) {
            throw "Please supply rate";
        }
        if (!paytype) {
            throw "Please supply pay type";
        }
        if (!position) {
            throw "Please supply position";
        }
        var emp = new Employee();
        emp.SetDob = dob;
        emp.SetFirstName = firstName;
        emp.SetLastName = lastName;
        emp.SetSSN = ssn;
        emp.Rate = rate;
        emp.PayType = paytype;
        emp.Position = position;
        return emp;
    };
    Object.defineProperty(Employee.prototype, "SetSSN", {
        set: function (value) {
            this.SSN = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "GetEarnings", {
        get: function () {
            var earnings = { Rate: 0, PayType: null };
            earnings.Rate = this.Rate;
            earnings.PayType = this.PayType;
            return earnings;
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
