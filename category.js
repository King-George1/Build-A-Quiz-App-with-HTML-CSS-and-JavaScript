let genKnowledge = document.getElementById("genKnowledge");
let compScience = document.getElementById("compScience");
let catName = "";

genKnowledge.addEventListener('click', ()=>{
    catName = "genKnowledge";
    return window.location.assign('/game.html?cat='+catName);
    // window.location.href = "/game.html?cat="+catName;
}, false);

compScience.addEventListener('click', ()=>{
    catName = "compScience";
    return window.location.assign('/game.html?cat='+catName);
    // window.location.href = "/game.html?cat="+catName;
}, false);