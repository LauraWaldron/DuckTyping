document.addEventListener("DOMContentLoaded", function(){
    const form=document.getElementById("quiz-form");
    form.addEventListener("submit", function(event){
        event.preventDefault();  //prevent form submission
        const formData=new FormData(form);
        //get the answers for the questions
        const answers={
            //get the answers to every single question
            q1: formData.get("question1"),
            q2: formData.get("question2"),
            q3: formData.get("question3"),
            q4: formData.get("question4"),
            q5: formData.get("question5"),
            q6: formData.get("question6"),
            q7: formData.get("question7"),
            q8: formData.get("question8"),
            q9: formData.get("question9"),
            q10: formData.get("question10"),
            q11: formData.get("question11"),
            q12: formData.get("question12"),
            q13: formData.get("question13"),
            q14: formData.get("question14"),

        }
    })
})

if(answers.q1 == "No" && answers.q5 == "No"){

}


//store the results?
sessionStorage.setItem("quizResults", results);

//redirect to results.html
location.href = "results.html"

document.getElementById("Qlbutton").onclick=function(){
    location.href="http://127.0.0.1:5500/frontend/Q1.html"
};


//the answers to the multiple choice questions
var options=["1", "2", "3"],
 tot=answers.length;
function getValue(radioName){
    var radios=getElementsByName(radioName);
}