

function user_login () {
    var quizzer1, quizzer2;

    quizzer1 = document.getElementById("Username_1").value;
    quizzer2 = document.getElementById("Username_2").value;



     localStorage.setItem("quizzer1", quizzer1);
     localStorage.setItem("quizzer2", quizzer2);
    
     window.location="MathQuiz-page.html";
     
    }
