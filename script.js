// 1
// Alert the sum of 2 numbers using a self-invoking function

function alertSum() {
    (function (x, y) {
        alert(`Sum of two numbers ${x} + ${y} = ${x + y}`);
    })(5, 10);
}

// 2
// Using for...in, for...of, and .forEach() with an array
function iterateArray() {
    const arr = [1, 2, 3, 4]
    let output = '';

    console.log("------------for...in------------");
    // for...in
    for (let indexIn in arr) {
        output += `for...in: Index ${indexIn} has value ${arr[indexIn]}\n`;
    }
    // for...in: Iterates over the enumerable properties of an object, including the array's indices.

    console.log("------------for...of------------");
    // for...of
    for (let indexOf of arr) {
        output += `for...of: Value ${indexOf}\n`;
    }
    // for...of: Iterates over the values of an iterable object, such as arrays or strings.

    console.log("------------.forEach()------------");
    // .forEach()
    arr.forEach((value, index) => {
        output += `forEach: Index ${index} has value ${value}\n`;
    })
    // .forEach(): Calls a provided function once for each array element.

    document.getElementById('arrayOutput').innerText = output;
}

//3
function useSpreadOperator() {
    console.log("------------Spread Operator------------");
    // Using spread operator with an array
    const fruit1 = ["Avocado", "Oranges", "Bananas"]
    const fruit2 = ["Blueberries", "Mango", "Strawberries"]
    const spread = [...fruit1, ...fruit2]
    console.log(spread);
    document.getElementById('spreadOutput').innerText = `List1: ${fruit1} \nList2: ${fruit2} \nSpread: ${spread}`;
}

console.log("------------Student Class------------");
//4
// Create a student class and print student data using template literals
class Student {
    constructor(name, university, faculty, finalGrade) {
        this.name = name;
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }
}

//5
function showStudent() {
    const student1 = new Student("Mohamed Mohamed", "Beni Seuf University", "Computer Science", "A")
    const student2 = new Student("Eman Sayed", "Cairo University", "Science", "B+")
    document.getElementById('studentOutput').innerText = `${student1.name} is a student in faculty of ${student1.faculty} in university ${student1.university}\n
    ${student2.name} is a student in faculty of ${student2.faculty} in university ${student2.university}`;
}

//6
// Tips Generator
const tips = [
    "Stay hydrated",
    "Take breaks",
    "Eat healthy",
    "Exercise regularly",
    "Get enough sleep",
    "Keep learning",
    "Stay organized",
    "Set goals",
    "Stay positive",
    "Ask for help"
];

function* tipGenerator() {
    let index = 0;
    while (true) {
        yield tips[index];
        index = (index + 1) % tips.length;
    }
}

const generator = tipGenerator();

document.getElementById('showAllTips').addEventListener('click', () => {
    let output = '';
    for (let tip of tips) {
        output += tip + '\n';
    }
    document.getElementById('tip').innerText = output;
});

document.getElementById('startInterval').addEventListener('click', () => {
    setInterval(() => {
        document.getElementById('tip').innerText = generator.next().value;
    }, 3000);
});