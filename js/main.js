////////////////          start Add Questions        ///////////////////////////////
//Get value from input
let number_of_question = 0;
function add_question() {
    let first_add=false;
    let question_input=document.getElementById('question').value;
    let form_description =document.getElementById('Form description').value;
    if (first_add == true && question_input==='' || form_description==='' || display_answer_input()) {
         window.confirm('You must fill all inputs') 
    }else if (!(check_correct_answer())){
        window.confirm('you need to check correct answer')
    }else{
        first_add=true;
        number_of_question += 1
    
        let quiz = document.getElementById("quizz")
        let add_questions_container = document.createElement("div");
        add_questions_container.className = "add_questions_container";
        add_questions_container.setAttribute("id", "add_questions_container");
        quiz.appendChild(add_questions_container);
    
        let div_questions = document.createElement("div");
        div_questions.className = "questions";
        add_questions_container.appendChild(div_questions);
    
        let form_group = document.createElement("div");
        form_group.className = "form-group";
        div_questions.appendChild(form_group);
    
        let input_question = document.createElement("INPUT");
        input_question.className = "question"
        input_question.className = "form-control";
        input_question.placeholder = "Question";
        input_question.setAttribute("type", "text");
        input_question.setAttribute("id", "question");
        input_question.className = "question"
        form_group.appendChild(input_question);
    
        let answers_container = document.createElement("div");
        answers_container.className = "answers";
        add_questions_container.appendChild(answers_container);
    
        for (let i = 0; i < 4; i++) {
            let form_group_answer = document.createElement("div");
            form_group_answer.className = "form-group";
            answers_container.appendChild(form_group_answer);

            let radio_answer = document.createElement("INPUT");
            radio_answer.className = "radio_answer";
            radio_answer.setAttribute("type", "radio");
            radio_answer.setAttribute("name", "answer" + number_of_question.toString());
            form_group_answer.appendChild(radio_answer);
    
            let input_answer = document.createElement("INPUT");
            input_answer.className = "form-control";
            input_answer.setAttribute("type", "text");
            input_answer.placeholder = "Answer";
            form_group_answer.appendChild(input_answer);
        }
    }
};
// -----------------------alert --------------------------------------------
let is_display_question = false;
let answer_input=document.getElementsByClassName('form-control');
function display_answer_input(){
    for (let answer of answer_input){
        if (answer.value ===''){
            return true;
        }
    }
    return false;
}
// ---------------------------check_correct_answer---------------------------
let radio=document.getElementsByClassName('radio_answer');
function check_correct_answer(){
    let checked_number = 0;
    let is_check = false;
    let num_0f_q = get_question().length;
    for (let r of radio){
        if (r.checked){
            checked_number += 1;
            console.log(checked_number)
        }
    }
    if (checked_number === num_0f_q){
        is_check = true;
    } 
    console.log(checked_number)
    return is_check;
}
function display_question() {
    let question_input=document.getElementById('question').value;
    let Quizz_Title=document.getElementById('Quizz_Title').value;
    let form_description =document.getElementsByClassName('Form description').value;

    if (question_input=== "" || Quizz_Title=== "" || form_description=== "" || display_answer_input() ) {
        window.confirm('You must fill all inputs')
    }else if (!(check_correct_answer())){
        window.confirm('you need to check correct answer')
    
    }else{
        let show_new_question = get_question();
        let show_new_answers = get_answers('radio_answer');
      
        for (let q = 0; q < show_new_question.length; q++) {
            let quiz = document.getElementById("quizz")
        
            let show_questions_container = document.createElement("div");
            show_questions_container.className = "add_answers_container";
            quiz.appendChild(show_questions_container);
        
            let show_questions = document.createElement("div");
            show_questions.className = "questions";
            show_questions_container.appendChild(show_questions);
        
            let show_form_group = document.createElement("div");
            show_form_group.className = "form-group";
            show_questions.appendChild(show_form_group);
        
            let show_input_question = document.createElement("div");
            show_input_question.className = "form-control";
            show_input_question.textContent = show_new_question[q];
            show_form_group.appendChild(show_input_question);
        
            let show_answers_container = document.createElement("div");
            show_answers_container.className = "answers";
            show_questions_container.appendChild(show_answers_container);
            for (let j = 0; j < 4; j++) {
                let show_form_group_answer = document.createElement("div");
                show_form_group_answer.className = "form-group";
                show_answers_container.appendChild(show_form_group_answer);
        
                let show_radio_answer = document.createElement("div");
                show_radio_answer.className = "new-radio-answer";
                show_form_group_answer.appendChild(show_radio_answer);
        
                let show_input_answer = document.createElement("div");
                show_input_answer.className = "form-control";
                show_input_answer.textContent = show_new_answers[q][j + 1];
                show_form_group_answer.appendChild(show_input_answer);
            }
            let hide_questons=document.querySelectorAll(".add_questions_container");
            for(let hide of hide_questons){
                hide.style.display = "none";
            }
            document.getElementById("btn_add_question").style.display="none";
            document.getElementById("btn_save_question").style.display="none";
        } 
        let hide_questons=document.querySelectorAll(".add_questions_container");
        for(let hide of hide_questons){
            show(hide,false)
        }
        show(document.getElementById("btn_add_question"),false)
        show(document.getElementById("btn_save_question"),false)
        is_display_question = true;
        is_display_submit = true;
    }
}
// ---------------------------get_the_question---------------------
function get_question() {
    let add_questions = document.querySelectorAll(".question");
    let new_questions = [];
    for (let quest of add_questions) {
        new_questions.push(quest.value);
    }
    return new_questions
}
// ---------------------------get_the_answers----------------------
function get_answers(class_name) {
    let all_answers = document.getElementsByClassName(class_name)
    let new_answers = [];
    let possible_answers = {};
    let number_of_answer = 1;
    let index_answer = 0;

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
        }
        number_of_answer += 1
    }
    return new_answers
}
// -------------------------show_and_hide---------------------------
function show(item,isValid){
    if (isValid){
        item.style.display = "block";
    }else {
        item.style.display = "none";
    }
}
// -------------------------main_btn---------------------------------
document.getElementById("btn_add_question").addEventListener("click", add_question)
document.getElementById("btn_save_question").addEventListener("click", display_question)
// -------------------------play Quiz--------------------------------
let is_click = false;
function play_quiz() {
    if (is_display_question === false) {
        if (is_click===false) {
            window.confirm("You need to save before!")
        }
    }else { 
        let play_new_question = get_question();
        let play_new_answers = get_answers("radio_answer");
        is_display_question = false;  
        is_click = true;
        for (let l = 0; l < play_new_question.length; l++) {
            number_of_question += 1
            let play_questions_container = document.createElement("div");
            play_questions_container.className = "play_answers_container";
            document.getElementById("quizz").appendChild(play_questions_container);

            let play_questions = document.createElement("div");
            play_questions.className = "questions";
            play_questions_container.appendChild(play_questions);

            let play_form_group = document.createElement("div");
            play_form_group.className = "form-group";
            play_questions.appendChild(play_form_group);

            let play_input_question = document.createElement("div");
            play_input_question.className = "form-control";
            play_input_question.textContent = play_new_question[l];
            play_form_group.appendChild(play_input_question);

            let play_answers_container = document.createElement("div");
            play_answers_container.className = "answers";
            play_questions_container.appendChild(play_answers_container);
            for (let k = 0; k < 4; k++) {
                let play_form_group_answer = document.createElement("div");
                play_form_group_answer.className = "form-group";
                play_answers_container.appendChild(play_form_group_answer);

                let play_radio_answer = document.createElement("INPUT");
                play_radio_answer.className = "new_radio_answer";
                play_radio_answer.setAttribute("type", "radio");
                play_radio_answer.setAttribute("name", "answer"+ number_of_question.toString());
                play_form_group_answer.appendChild(play_radio_answer);

                let play_input_answer = document.createElement("div");
                play_input_answer.className = "form-control";
                play_input_answer.textContent = play_new_answers[l][k + 1];
                play_form_group_answer.appendChild(play_input_answer);
                
            }
        } 
        let hide_questons=document.querySelectorAll(".add_answers_container");
            for(let hide of hide_questons){
                hide.style.display = "none";
            }
        document.getElementById("btn_submit_question").style.display = "block";
    }
}

// -----------------------------Show_the_result---------------------------
function show_result() {
    let score = 0
    
    let old_answer = get_answers("radio_answer");
    let new_answer = get_answers("new_radio_answer")
    let max_scores = new_answer.length*10;
    for (obj in new_answer){
        if (old_answer[obj]["correct"] === new_answer[obj]["correct"] && new_answer[obj]["correct"]!=0){
            score += 10
        }
    }  
    document.getElementById("score").style.display = "block" ;
    let show_scores = document.getElementById("score");
    show_scores.textContent = "Total scores: " + score + " / " + max_scores;
    show_scores.style.fontSize = "20px"
    document.getElementById("btn_submit_question").style.display = "none";
}
//-------------------------- mains_button----------------------------------
document.getElementById("quiz-btn").addEventListener("click", play_quiz);
document.getElementById("btn_submit_question").style.display = "none";
document.getElementById("btn_submit_question").addEventListener("click", show_result)














































































































































































