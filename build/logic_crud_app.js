"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
exports.createStudent = createStudent;
exports.readStudent = readStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
//k let's start with just the basic functions. No storage. No stupid express.
var Student = /** @class */ (function () {
    function Student(name, age, isEnrolled) {
        this.name = name;
        this.age = age;
        this.isEnrolled = isEnrolled;
    }
    return Student;
}());
exports.Student = Student;
//Example student that can go in the list for starters
var one = new Student("Bob Thompson", 1, true);
//Students list that will be added to while the thing is running?
var students = [one];
//Create student from input data
function createStudent(name, age, enrolled) {
    var student = new Student(name, age, enrolled);
    if (student) {
        students.push(student);
        return student;
    }
    else
        throw new Error("Student not created, there was an error");
}
//Find a student in the array based on provided name
function readStudent(name) {
    var answer = students.find(function (s) { return s.name === name; });
    if (answer)
        return answer;
    throw new Error("Student not found");
}
//Update a student's enrollment status based on provided information
function updateStudent(name, enrollUpdate) {
    var currentStudent = students.find(function (s) { return s.name === name; });
    if (!currentStudent) {
        throw new Error("Could not find student from given input");
    }
    currentStudent.isEnrolled = enrollUpdate;
    return currentStudent;
}
//Delete an entire student record because we can
function deleteStudent(name) {
    var studentIndex = students.findIndex(function (s) { return s.name === name; });
    if (studentIndex === -1) {
        throw new Error("Student not found, invalid index returned.");
    }
    else {
        var deletedStudent = students.splice(studentIndex, 1);
        if (deletedStudent)
            return deletedStudent[0];
    }
    throw new Error("Student not deleted, there was an error");
}
