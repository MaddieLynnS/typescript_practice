let level;
level = 1;
level = 'a'
// THis is bad; don't do it

function render(document:any) {
    console.log(document);
}

let numbers = [1,2,3,4]; //can do : numbers[] but it's unnecessary
numbers.forEach(n => n.toFixed())

//Tuples
let user: [number, string] = [1, "Germain"];
user.concat(); //beware using this or push because it will add stuff to your array/tuple

//Enum
enum Size { Small, Medium, Large };
let mySize: Size = Size.Small;

//Functions
//Best practices for dealing with functions: ALWAYS specify type
function calculateTax(income: number, taxYear: number): number { // you can code in default values here to prevent null errors
    if ((income < 50_000) && (taxYear < 2022))
        return income * 1.2;
    return income;
}

//Objects
let employee: Employee = {
    id : 1, name: "Jeff",
    retire: (date: Date) => {
        console.log(date);
    }
};

//Type alias
type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void
}

//Union types
function KgToLbs(weight: number | string) : number {

    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.log(KgToLbs(10));
console.log(KgToLbs('10kg'));

//Intersection
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type Widget = Draggable & Resizable;
let textBox: Widget = {
    drag: () => {},
    resize: () => {}
};

//Literal type (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;
type Metric = 'cm' | 'in';

//working with null/undefined
function greet2(name: string | null | undefined) { //this feels a bit clunky
    if(name)
        console.log(name.toUpperCase());
}

greet2("Jemmah");

type Customer = {
    birthday?: Date
};

function getCustomerFromDB(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date()};
}

let customer = getCustomerFromDB(2);
//if (customer !== null)
    console.log(customer?.birthday);
let customer2 = getCustomerFromDB(0);
console.log(customer2?.birthday?.getFullYear());

//Optional element access operator
// customers?.[0]

//example using an interface and a class w constructor
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const jimmy: User = new UserAccount("Jimmy", 2);

//interfaces are cool because they let you add/extend them after, whereas types are more fixed
interface Student extends User {
    student_id: number;
}

type Employee2 = Customer & { //Employee gets duplicate identifier error because there's Employee already in this file
    on_shift: boolean;
}