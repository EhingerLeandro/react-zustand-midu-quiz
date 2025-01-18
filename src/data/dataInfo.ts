export const dbQuestions =[
    {
      id: 1,
      question: "What will the following code output?",
      code: "console.log(typeof null);",
      answers: [
        "A) 'null'",
        "B) 'undefined'",
        "C) 'object'",
        "D) 'number'"
      ],
      "correctAnswer": 2
    },
    {
      id: 2,
      question: "Which method converts an array to a string?",
      code: "const arr = [1, 2, 3];",
      answers: [
        "A) arr.toString()",
        "B) arr.join('')",
        "C) arr.stringify()",
        "D) arr.concat()"
      ],
      "correctAnswer": 0
    },
    {
      id: 3,
      question: "What is the output of the following code?",
      code: "let x = 5; x = ++x + x--; console.log(x);",
      answers: [
        "A) 11",
        "B) 12",
        "C) 10",
        "D) 13"
      ],
      "correctAnswer":0
    },
    {
      id: 4,
      question: "Which of the following creates an empty object?",
      code: "/* Fill in the blank */",
      answers: [
        "A) let obj = ();",
        "B) let obj = {};",
        "C) let obj = [];",
        "D) let obj = Object();"
      ],
      "correctAnswer": 1
    },
    {
      id: 5,
      question: "What does 'use strict' do in JavaScript?",
      code: "'use strict'; function myFunction() { /* code */ }",
      answers: [
        "A) Enables ES6 features.",
        "B) Prevents the use of undeclared variables.",
        "C) Automatically optimizes the code.",
        "D) Disables strict mode."
      ],
      "correctAnswer": 1
    },
    {
      id: 6,
      question: "What is the result of this code?",
      code: "const obj = { a: 1, b: 2 }; console.log('b' in obj);",
      answers: [
        "A) false",
        "B) undefined",
        "C) true",
        "D) Error"
      ],
      "correctAnswer": 2
    },
    {
      id: 7,
      question: "What will be logged to the console?",
      code: "let a = [1, 2, 3]; let b = a; b.push(4); console.log(a);",
      answers: [
        "A) [1, 2, 3]",
        "B) [1, 2, 3, 4]",
        "C) [4]",
        "D) Error"
      ],
      "correctAnswer": 1
    },
    {
      id: 8,
      question: "Which array method is used to find an element?",
      code: "const arr = [10, 20, 30, 40];",
      answers: [
        "A) arr.find()",
        "B) arr.search()",
        "C) arr.filter()",
        "D) arr.map()"
      ],
      "correctAnswer": 0
    },
    {
      id: 9,
      question: "What will this code log to the console?",
      code: "const x = [1, 2, 3].map(num => num * 2); console.log(x);",
      answers: [
        "A) [1, 2, 3]",
        "B) [2, 4, 6]",
        "C) [1, 4, 9]",
        "D) Error"
      ],
      "correctAnswer": 1
    },
    {
      id: 10,
      question: "What is the value of 'y' after the code executes?",
      code: "let x = NaN; let y = x === NaN;",
      answers: [
        "A) true",
        "B) false",
        "C) undefined",
        "D) Error"
      ],
      "correctAnswer": 1
    }
  ]