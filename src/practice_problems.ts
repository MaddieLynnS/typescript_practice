//make formatStudentInfo that takes three parameters and returns a string to print
function formatStudentInfo(name: string, age: number, enrolled: boolean): string {
    return `${name} is ${age} years old and is ${enrolled ? '': 'not'} enrolled.`;
}

let studentName: string = "Bob Thompson";
let studentAge: number = 45;
let isEnrolled: boolean = false;

let summary: string = formatStudentInfo(studentName, studentAge, isEnrolled);
console.log(summary);

//Arrays and Typed functions
//CalculateAverage function that takes an array and returns the average of the numbers in the array
function calculateAverage(grades: number[]): number {
    let total: number = 0;
    grades.forEach((n: number) => total += n); //could also just do n, but it's good
    console.log(`Total is: ${total}`);
    return total / grades.length; //chat pointed out that you'd probably want a check for if the grades is empty
}

let studentGrades = [75, 89, 91, 94, 86];
let averageGrade: number = calculateAverage(studentGrades);
console.log(averageGrade);

//Tuples
//create function that takes a tuple and returns a string for a students record
function printStudentRecord(studentDetails: StudentRecord): string {
    return `${studentDetails[0]} is ${studentDetails[1]} years old and is ${studentDetails[2] ? '':'not '}currently enrolled.`;
}

type StudentRecord = [name: string, age: number, isEnrolled: boolean];

let bob: StudentRecord = ["Bob Thompson", 45, true];
console.log(printStudentRecord(bob));

//Classesssss
//Create Student class that has those three pieces of info in a constructor AND a function call getSummary that summarizes. Wow.
class Student1 {
    name: string;
    age: number;
    isEnrolled: boolean;

    constructor(name: string, age: number, isEnrolled: boolean) {
        this.name = name;
        this.age = age;
        this.isEnrolled = isEnrolled;
    }

    getSummary(): string {
        return `${this.name} is ${this.age} years old and is ${this.isEnrolled ? '': 'not '}currently enrolled.`;
    }
}

let bobby: Student1 = new Student1("Bob Thompson", 45, true);
console.log(bobby.getSummary());