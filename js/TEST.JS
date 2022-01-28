function display_question() {
    let question_input=document.getElementById('question').value;
    let Quizz_Title=document.getElementById('Quizz_Title').value;
    let form_description =document.getElementsByClassName('Form description').value;
    let alert = document.querySelector('.alert');
    if (question_input=== "" || Quizz_Title=== "" || form_description=== "" || display_answer_input() ) {
        alert.style.display = "flex"
    }else if (!(check_correct_answer())){
        alert.style.display = "flex"
    
    }else{
        let show_new_question = get_question();
        let show_new_answers = get_answers('radio_answer');
        alert.style.display = "none"
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