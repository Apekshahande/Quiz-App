const quizData = [
    {
        question: "How Can you open the link in a new tab/browser window?",
        a: "<a>New</a>",
        b: "<a href ='url' new>",
        c: "<a href ='url' target = 'new'>",
        d: "<a href ='url' target ='_blank'>",
        correct: "d",
    },
    {
        question: "Which HTML element defines navigation links?",
        a: "<navigation>",
        b: "<nav>",
        c: "<div>",
        d: "<navigate>",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "The Bootstrap grid system is based on how many columns?",
        a: "12",
        b: "9",
        c: "3",
        d: "6",
        correct: "a",
    },
    {
        question: "Inside which element do we put the JavaScript?",
        a: "<javascript>",
        b: "<scripting>",
        c: "<js>",
        d: "<script>",
        correct: "d",
    },
    {
        question: "How do you create a function in JavScript",
        a: "function =myFunction()",
        b: "function myFunction()",
        c: "myFunction()",
        d: "function:myFunction",
        correct: "b",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onclick",
        b: "onmouseover",
        c: "onchange",
        d: "onmouseclick",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Colorful Style Sheets",
        b: "Computer style sheets",
        c: "Cascading Style Sheets",
        d: "Creative Style Sheets",
        correct: "c",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "{body:color=black;}",
        b: "body {color:black;}",
        c: "{body;color:black;}",
        d: "body:color = black;",
        correct: "b",
    },
    {
        question: "How do you select an element with id 'demo'?",
        a: "*demo",
        b: ".demo",
        c: "demo",
        d: "#demo",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})