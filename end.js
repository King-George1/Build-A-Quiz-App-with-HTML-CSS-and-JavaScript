const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScoresGenKnowledge = JSON.parse(localStorage.getItem('highScoresGenKnowledge')) || [];
const highScoresCompScience = JSON.parse(localStorage.getItem('highScoresCompScience')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

getCategoryname =() =>{
    const url = window.location.href;
    return url.slice(url.indexOf("=")+1);
}

let catName = getCategoryname();

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    //If condition here
    if(catName === "compScience"){
        highScoresCompScience.push(score);
        highScoresCompScience.sort((a, b) => b.score - a.score);
        highScoresCompScience.splice(5);
    }
    else if(catName === "genKnowledge"){
        highScoresGenKnowledge.push(score);
        highScoresGenKnowledge.sort((a, b) => b.score - a.score);
        highScoresGenKnowledge.splice(5);
    }
    

    localStorage.setItem('highScoresCompScience', JSON.stringify(highScoresCompScience));
    localStorage.setItem('highScoresGenKnowledge', JSON.stringify(highScoresGenKnowledge));
    window.location.assign('/');
};
