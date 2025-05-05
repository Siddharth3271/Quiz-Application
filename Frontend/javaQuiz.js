let currentQuestionIndex=0;
let questions=[];
let correctAnswers=0;
let totalQuestions=0;

//function to fetch questions from the API
async function fetchQuestions() {
    try{
        const response=await fetch('https://localhost:8081/api/questions');
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        questions=await response.json()   //returning array of questions
        totalQuestions=questions.length;   //total number of questions
        document.getElementById('total-questions').textContent=totalQuestions; //displaying total number of questions
        displayQuestion(); //display the first question
    }
    catch(error){
        console.error('Error fetching questions:', error); 
        document.getElementById('question-text').textContent='Failed to load questions. Please try again later.'; 
    }
}

function displayQuestion(){
    if(questions.length===0){
        return;
    }

    const questionText=document.getElementById('question-text');
    const optionsContainer=document.getElementById('options-container');
    const currentQuestion=questions[currentQuestionIndex];

    questionText.textContent=currentQuestion.question;
    optionsContainer.innerHTML='';  //clear previous output

    currentQuestion.options.foreach(option=>{
        const button=document.getElementById('button');
        button.textContent=option
        button.className='option'
        button.onclick=()=>checkAnswer(option)   //check answer on click
        optionsContainer.appendChild(button);
    })
    document.getElementById('current-question').textContent=currentQuestion+1;
}