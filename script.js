const Questions = [{
    q: "Commonly used data types DO NOT include:____.",
    a: [
        { text: "strings()", isCorrect: false },
        { text: "booleans()", isCorrect: false },
        { text: "alerts( )", isCorrect: true },
        { text: "numbers()", isCorrect: false }
    ]
},

{
    q: "The condition in an if / else statement is enclosed within ____.",
    a: [
        { text: "quotes()", isCorrect: false },
        { text: "curly brackets()", isCorrect: false },
        { text: "parentheses()", isCorrect: true },
        { text: "square brackets()", isCorrect: false }
    ]
},

{
    q: "Arrays in JavaScript can be used to store ____.",
    a: [
        { text: "numbers and strings()", isCorrect: false },
        { text: "other arrays()", isCorrect: false },
        { text: "booleans()", isCorrect: false },
        { text: "all of the above()", isCorrect: true }
    ]
},

{
    q: "String values must be enclosed within ____ when being assigned to variables.",
    a: [
        { text: "commas()", isCorrect: false },
        { text: "curly brackets()", isCorrect: false },
        { text: "quotes()", isCorrect: true },
        { text: "parentheses()", isCorrect: false }
    ]
},

{
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [
        { text: "JavaScript()", isCorrect: false },
        { text: "terminal / bash()", isCorrect: false },
        { text: "for loops()", isCorrect: false },
        { text: "console.log()", isCorrect: true }
    ]
}
]

let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}


