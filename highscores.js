const highScoresList = document.getElementById("highScoresList");
let selectCat = document.getElementById("category");
let selectedCategory = "";

processSelect = (e) =>{
  let selectValue = selectCat.value;
  if(selectValue == ""){
    highScoresList.innerHTML = "";
    window.alert("Select A Category");
    return;
  }
  else if(selectValue == "compScience"){
    selectedCategory = "highScoresCompScience";
  }
  else if(selectValue == "genKnowledge"){
    selectedCategory = "highScoresGenKnowledge";
  }
  let highScores = JSON.parse(localStorage.getItem(selectedCategory)) || [];

  highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
  
}

selectCat.addEventListener('change', processSelect, false);





