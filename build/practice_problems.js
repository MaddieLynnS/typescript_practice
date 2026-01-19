"use strict";
//make formatStudentInfo that takes three parameters and returns a string to print
function formatStudentInfo(name, age, enrolled) {
    return "".concat(name, " is ").concat(age, " years old and is ").concat(enrolled ? '' : 'not', " enrolled.");
}
var studentName = "Bob Thompson";
var studentAge = 45;
var isEnrolled = false;
var summary = formatStudentInfo(studentName, studentAge, isEnrolled);
console.log(summary);
//Arrays and Typed functions
//CalculateAverage function that takes an array and returns the average of the numbers in the array
function calculateAverage(grades) {
    var total = 0;
    grades.forEach(function (n) { return total += n; }); //could also just do n, but it's good
    console.log("Total is: ".concat(total));
    return total / grades.length; //chat pointed out that you'd probably want a check for if the grades is empty
}
var studentGrades = [75, 89, 91, 94, 86];
var averageGrade = calculateAverage(studentGrades);
console.log(averageGrade);
//Tuples
//create function that takes a tuple and returns a string for a students record
function printStudentRecord(studentDetails) {
    return "".concat(studentDetails[0], " is ").concat(studentDetails[1], " years old and is ").concat(studentDetails[2] ? '' : 'not ', "currently enrolled.");
}
var bob = ["Bob Thompson", 45, true];
console.log(printStudentRecord(bob));
//Classesssss
//Create Student class that has those three pieces of info in a constructor AND a function call getSummary that summarizes. Wow.
var Student = /** @class */ (function () {
    function Student(name, age, isEnrolled) {
        this.name = name;
        this.age = age;
        this.isEnrolled = isEnrolled;
    }
    Student.prototype.getSummary = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old and is ").concat(this.isEnrolled ? '' : 'not ', "currently enrolled.");
    };
    return Student;
}());
var bobby = new Student("Bob Thompson", 45, true);
console.log(bobby.getSummary());
