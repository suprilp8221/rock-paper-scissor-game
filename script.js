let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win!your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose! ${compchoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";

    }
}

const drwaGame=()=>{

    msg.innerText="game was draw.play again"
    msg.style.backgroundColor="#081b31";

}

const playGame=(userChoice)=>{
     const compchoice=genCompchoice();
    


    if(userChoice===compchoice){
        //drwa match
        drwaGame();
    } else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin= compchoice==="paper" ? false:true;
        } else if(userChoice==="paper"){
            userWin= compchoice==="scissors"?false:true;
        } else{
           userWin= compchoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})