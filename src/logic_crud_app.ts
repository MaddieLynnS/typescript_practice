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
    if (student){
        students.push(student);
        return student;
    }
    else throw new Error("Student not created, there was an error");
}

//Find a student in the array based on provided name
export function readStudent(name: string) : Student {
    let answer = students.find((s) => s.name === name);
    if (answer) return answer;
    throw new Error("Student not found");
}


//Update a student's enrollment status based on provided information
export function updateStudent(name: string, enrollUpdate: boolean) : Student {
    let currentStudent = students.find(s => s.name === name);
    if (currentStudent) {
        currentStudent.isEnrolled = enrollUpdate;
        return currentStudent;
    }
    else throw new Error("Could not find student from given input")
}


//Delete an entire student record because we can
export function deleteStudent(name: string) : Student {
    let studentIndex: number = students.findIndex((s:Student) => s.name === name);
    if (studentIndex === -1) {
        throw new Error("Student not found, invalid index returned.");
    }
    else {
        let deletedStudent: Student[] = students.splice(studentIndex, 1);
        if (deletedStudent) return deletedStudent[0];
    }
    throw new Error("Student not deleted, there was an error");
}