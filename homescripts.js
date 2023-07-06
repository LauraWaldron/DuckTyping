document.addEventListener("DOMContentLoaded", function(){
    const form=document.getElementById("quiz-form");
    form.addEventListener("submit", function(event){
        event.preventDefault();  //prevent form submission
        const formData=new FormData(form);
        //get the answers for the questions
        const answers={
            q1: formData.get("question 1"),
            q2: formData.get("question2"),
            q3: formData.get("question3"),
            q4: formData.get("question4"),
        }
    })
})




document.getElementById("Qlbutton").onclick=function(){
    location.href="http://127.0.0.1:5500/frontend/Q1.html"
};


//the answers to the multiple choice questions
var options=["1", "2", "3"],
 tot=answers.length;
function getValue(radioName){
    var radios=getElementsByName(radioName);
}