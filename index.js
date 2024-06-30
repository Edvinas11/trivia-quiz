const quesDiv = document.getElementById("ques");
const optDiv = document.getElementById("opt");

async function fetchData() {
    try {
        const response = await fetch(`https://the-trivia-api.com/v2/questions`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        return data;
    }
    catch(error) {
        console.error(error);
    }
}

let currQuestion = 0;
let score = 0;
let questions = [];

function loadQuestions(){
    opt.innerHTML = ""
    let currentQuestion = questions[currQuestion].question.text;
    quesDiv.innerHTML = currentQuestion;

    let currentAnswer = questions[currQuestion].correctAnswer;
    let currentincorrectAnswers = questions[currQuestion].incorrectAnswers;
    let currentOptions = [currentAnswer, ...currentincorrectAnswers];
    currentOptions = currentOptions.sort((a, b) => 0.5 - Math.random());

    for (let opt of currentOptions) {
        let optionBtn = document.createElement("button");
        optionBtn.textContent = opt;
        optionBtn.classList.add("btn");

        optionBtn.onclick = () => {
            disableButtons();

            if (opt === currentAnswer) {
                score += 1;    
                optionBtn.classList.add("btn-correct");
            }
            else {
                optionBtn.classList.add("btn-wrong");
            }

            setTimeout(() => {
                nextQuestion();
            }, 1500);
        };

        optDiv.append(optionBtn);
    }
}

function nextQuestion() {
    if (currQuestion < questions.length - 1) {
        currQuestion++;
        loadQuestions();
    }
    else {
        quesDiv.remove();
        opt.remove();
        showScore();
    }
}

function showScore() {
    let panel = document.getElementById("panel");
    let h3 = document.createElement("h3");
    h3.textContent = `${score}/10`;
    panel.append(h3);
}

function disableButtons() {
    const buttons = optDiv.getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = true;
    }
}

fetchData().then(value => {
    questions = value;
    loadQuestions()
});