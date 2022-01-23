////////////////          start Add Questions        ///////////////////////////////
//Get value from input

let questions = {
    questions1: { question: "what is your name?", answers: { answer1: "Vansao", isRightAnswer: true, answer2: "Sopha", isRightAnswer: false, answer1: "Thib", isRightAnswer: false, answer1: "Hang", isRightAnswer: false, } },
    questions2: { question: "what is your name?", answers: { answer1: "Vansao", isRightAnswer: true, answer2: "Sopha", isRightAnswer: false, answer1: "Thib", isRightAnswer: false, answer1: "Hang", isRightAnswer: false, } },
    questions3: { question: "what is your name?", answers: { answer1: "Vansao", isRightAnswer: true, answer2: "Sopha", isRightAnswer: false, answer1: "Thib", isRightAnswer: false, answer1: "Hang", isRightAnswer: false, } },
    questions4: { question: "what is your name?", answers: { answer1: "Vansao", isRightAnswer: true, answer2: "Sopha", isRightAnswer: false, answer1: "Thib", isRightAnswer: false, answer1: "Hang", isRightAnswer: false, } }

};
let number_of_question = 0;

function add_question() {
    number_of_question += 1

    let quiz = document.getElementById("quizz")

    let add_questions_container = document.createElement("div");
    add_questions_container.className = "add_questions_container";
    quiz.appendChild(add_questions_container);

    let div_questions = document.createElement("div");
    div_questions.className = "questions";
    add_questions_container.appendChild(div_questions);

    let form_group = document.createElement("div");
    form_group.className = "form-group";
    div_questions.appendChild(form_group);

    let input_question = document.createElement("INPUT");
    input_question.className = "form-control";
    input_question.placeholder = "Question";
    input_question.setAttribute("type", "text");
    form_group.appendChild(input_question);


    let answers_container = document.createElement("div");
    answers_container.className = "answers";
    add_questions_container.appendChild(answers_container);
    for (let i = 0; i < 4; i++) {
        let form_group_answer1 = document.createElement("div");
        form_group_answer1.className = "form-group";
        answers_container.appendChild(form_group_answer1);


        let radio_answer1 = document.createElement("INPUT");
        radio_answer1.className = "radio_answer";
        radio_answer1.setAttribute("type", "radio");
        radio_answer1.setAttribute("name", "answer" + number_of_question.toString());
        form_group_answer1.appendChild(radio_answer1);

        let input_answer1 = document.createElement("INPUT");
        input_answer1.className = "form-control";
        input_answer1.setAttribute("type", "text");
        input_answer1.placeholder = "Answer1";
        form_group_answer1.appendChild(input_answer1);
    }
};

function get_question() {
    let add_questions = document.querySelectorAll("#question");
    let all_answers = document.getElementsByClassName("radio_answer")

    let new_questions = [];
    let new_answers = [];
    let possible_answers = {};
    let number_of_answer = 1;
    let index_answer = 0;
    for (let quest of add_questions) {
        new_questions.push(quest.value);
    }
    for (let answer of all_answers) {

        possible_answers[number_of_answer.toString()] = answer.nextElementSibling.value;
        if (answer.checked) {
            index_answer = number_of_answer;
        }
        if (number_of_answer % 4 == 0) {
            possible_answers.correct = index_answer.toString();
            new_answers.push(possible_answers)
            possible_answers = {};
            number_of_answer = 0;
            console.log(new_answers)
        }
        number_of_answer += 1
    }

}
document.getElementById("btn_add_question").addEventListener("click", add_question)
document.getElementById("btn_save_question").addEventListener("click", get_question)

































































































//---------------------------------------------- End add Question ----------------------------->









////////////////////////////////////////// Start Display Question ///////////////////////////////////////



































































































// ------------------------------------- End of Display Question ------------------------------------>









/////////////////////////////////////////// Start playing quiz///////////////////////////////////////



































































































//-------------------------------------------------- End of plying quiz     ----------------------------------------->

//-------------------------------------------------- End of plying quiz     ----------------------------------------->