// Function to get the result from localStorage or URL parameters
function displayResult(){
    const score=localStorage.getItem('quizScore');
    const totalQuestions=localStorage.getItem('totalQuestions'); 
    const feedback=document.getElementById('feedback');

    if (score!==null) {
        document.getElementById('score').innerText = `You scored ${score} out of ${totalQuestions}`;
        
        //feedback based on score
        const percentage=(score/totalQuestions) * 100;
        if(percentage>=80){
            feedback.innerText = 'Excellent work! Keep it up!';
        } 
        else if(percentage>=50){
            feedback.innerText='Good job! You can do even better!';
        } 
        else{
            feedback.innerText='Don’t give up! Try again!';
        }
    } 
    else{
        document.getElementById('score').innerText='No score available.';
    }
}
window.onload=displayResult;