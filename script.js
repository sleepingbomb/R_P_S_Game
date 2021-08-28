var userScore =0;
var compScore =0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board")
const result_div=document.querySelector(".result")
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoice(){
    const choices=['r','p','s'];
    const randomnumber=Math.floor(Math.random()*3);
    return choices[randomnumber];
}
// getcomputerchoice();

function win(){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    console.log("You win "+userScore);
}

function lose(){
    compScore++;
    compScore_span.innerHTML=compScore;
    console.log("YOU LOSE : "+compScore);

}

function draw(){
    console.log(userScore+"  Draw  "+compScore);
}

function game(userchoice){
    const computer_choice= getcomputerchoice();
    switch (userchoice + computer_choice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "sr":
        case "ps":
            lose();
            break;
        case "rr":
        case "ss":
        case "pp":
            draw();
            break;
    }
    
}

function main(){
    rock_div.addEventListener("click",function(){
        game("r");
    })
    paper_div.addEventListener("click",function(){
        game("p");
    })
    scissor_div.addEventListener("click",function(){
        game("s");
    })
}

main();



