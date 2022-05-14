const quizeData = [
    {
        question: "What is the most use programming language ?",
        a: "C++",
        b: "Javascript",
        c: "Python",
        d: "Java",

        correct: 'd' ,
    },
    {
        question: "Output system is javascript ?",
        a: "Console.log();",
        b: "print",
        c: "dir accepted()",
        d: "output()",

        correct: 'a' ,
    },
    {
        question: "HTML is ?",
        a: 'Pogramming languase',
        b: 'Markup Language',
        c: 'Html docs',
        d: 'Fon end language',

        correct: 'b' ,
    },
    {
        question: "What does JSON stand from ?",
        a: 'Hypertext Murkup languase',
        b: 'Javascript Object Notation',
        c: 'Jason object notation',
        d: 'javascript outstanding Notetion',

        correct: 'b' ,
    },
    {
        question: "What years Javascript launce ?",
        a: '1995',
        b: '1996',
        c: '1997',
        d: 'none of the avobe',
    
        correct: 'a' ,
    },
];

const answerEl = document.querySelectorAll(".answer");
const Quize = document.getElementById("quize");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitEl = document.getElementById("submit");


let currentQuize = 0;
let score = 0;

loadQuize();

function loadQuize(){
    deSelected();
    const currentQuizeData = quizeData[currentQuize];

    questionEl.innerText = currentQuizeData.question;
    a_text.innerText = currentQuizeData.a;
    b_text.innerText = currentQuizeData.b;
    c_text.innerText = currentQuizeData.c;
    d_text.innerText = currentQuizeData.d;
}

function getSelected(){
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });
        return answer;
}



function deSelected(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitEl.addEventListener("click", () => {
   const answers = getSelected();

   if(answers){
       if (answers === quizeData[currentQuize].correct) {
           score++;
       }

       currentQuize++;
        if (currentQuize < quizeData.length) {
            loadQuize();
        }else{
            Quize.innerHtml = `<h2> You answered correctly ${score} out of ${quizeData.length}</h2>`;
        };
                
    } 
})