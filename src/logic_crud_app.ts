//k let's start with just the basic functions. No storage. No stupid express.
export class Student {
    name: string;
    age: number;
    isEnrolled: boolean

    constructor(name: string, age: number, isEnrolled: boolean) {
        this.name = name;
        this.age = age;
        this.isEnrolled = isEnrolled;
    }
}

//Example student that can go in the list for starters
let one: Student = new Student("Bob Thompson", 1, true);

//Students list that will be added to while the thing is running?
let students: Student[] = [one];


//Create student from input data
export function createStudent(name: string, age: number, enrolled: boolean) : Student {
    let student: Student = new Student(name, age, enrolled);
    students.push(student);
    return student;
}


export function readStudent(name: string) : Student | string {
    let answer = students.find((s) => s.name === name);
    if (answer) return answer;
    return "The student was not found";
}

//export fakeFunction();