"use strict";
var _a;
var level;
level = 1;
level = 'a';
// THis is bad; don't do it
function render(document) {
    console.log(document);
}
var numbers = [1, 2, 3, 4]; //can do : numbers[] but it's unnecessary
numbers.forEach(function (n) { return n.toFixed(); });
//Tuples
var user = [1, "Germain"];
user.concat(); //beware using this or push because it will add stuff to your array/tuple
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var mySize = Size.Small;
//Functions
//Best practices for dealing with functions: ALWAYS specify type
function calculateTax(income, taxYear) {
    if ((income < 50000) && (taxYear < 2022))
        return income * 1.2;
    return income;
}
//Objects
var employee = {
    id: 1, name: "Jeff",
    retire: function (date) {
        console.log(date);
    }
};
//Union types
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(KgToLbs(10));
console.log(KgToLbs('10kg'));
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 50;
//working with null/undefined
function greet2(name) {
    if (name)
        console.log(name.toUpperCase());
}
greet2("Jemmah");
function getCustomerFromDB(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomerFromDB(2);
//if (customer !== null)
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
var customer2 = getCustomerFromDB(0);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var jimmy = new UserAccount("Jimmy", 2);
