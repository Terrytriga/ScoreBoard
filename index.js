

let homeCount = 0;
let count = 0;
let homeScore = document.getElementById("Hscore-board")
let awayScore = document.getElementById("Ascore-board")
let showLeader = document.getElementById("leader")
let results = "";

function Hplus1(){
    homeCount+=1;
    homeScore.textContent = homeCount;

}
function Hplus2(){
    homeCount+=2
    homeScore.textContent = homeCount;
}

function Hplus3(){
    homeCount+=3;
    homeScore.textContent = homeCount;
}

function plus1(){
    count+=1;
    awayScore.textContent = count;
}

function plus2(){
    count+=2;
    awayScore.textContent = count;
}
function plus3(){
    count+=3;
    awayScore.textContent = count;
}

function reset(){
    count = 0;
    homeCount = 0;
    homeScore.textContent = homeCount;
    awayScore.textContent = count;
    results = "Start new game"
    showLeader.textContent = results;

}
function leader(){
    if(homeCount > count){
        results = "Home Team";
        showLeader.textContent = results;
    }
    if(homeCount < count){
        results = "Away team";
        showLeader.textContent = results;
    }
    if(homeCount === count){
        results = "Draw";
        showLeader.textContent = results;
    }
 

    
}



