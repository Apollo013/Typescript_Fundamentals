"use strict";
var Person = (function () {
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.Guid = null;
        throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
    }
    Object.defineProperty(Person.prototype, "GetFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "GetLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
