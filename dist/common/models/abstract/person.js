"use strict";
var string_utilities_1 = require("../../../utilities/string-utilities");
var Person = (function () {
    function Person() {
        this.Guid = null;
        this.Guid = string_utilities_1.createGuid();
    }
    Object.defineProperty(Person.prototype, "GetGuid", {
        get: function () {
            return this.Guid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "GetFirstName", {
        get: function () {
            return this.FirstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "GetLastName", {
        get: function () {
            return this.LastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "GetDob", {
        get: function () {
            return this.Dob;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "SetFirstName", {
        set: function (value) {
            this.FirstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "SetLastName", {
        set: function (value) {
            this.LastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "SetDob", {
        set: function (value) {
            this.Dob = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.FullName = function () {
        return this.FirstName + ' ' + this.LastName;
    };
    Person.prototype.ToString = function () {
        return '\nName:\t' + this.FullName() + '\nDOB:\t' + this.Dob.toDateString() + '\nGuid:\t' + this.Guid;
    };
    return Person;
}());
exports.Person = Person;
