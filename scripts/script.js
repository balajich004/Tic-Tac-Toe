let cell=document.querySelectorAll(".cell");
const wincon=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let turn=true;
function handlePlayerDetails(){
    const player1=document.querySelector("#player1");
    const player2=document.querySelector("#player2");
    const submit=document.querySelector(".submit");
    if (submit && player1 && player2) {
        submit.addEventListener("click",(event)=>{
            event.preventDefault();
            localStorage.setItem("player1",player1.value);
            localStorage.setItem("player2",player2.value);
            window.location.href = "./playersgame.html";
        });
    }
}
function display() {
    const player1_title=document.querySelector(".player1-title");
    const player2_title=document.querySelector(".player2-title");
    if (player1_title && player2_title) {
        const player1Name=localStorage.getItem("player1");
        const player2Name=localStorage.getItem("player2");
        if(player1_title && player2_title){
            player1_title.innerText = player1Name+" 🥷";
            player2_title.innerText = "🥷 "+player2Name;
        }
        else{
            player1_title="Player 1";
            player2_title="Player 2";
        }
    }
}


cell.forEach((boxed)=>{
    boxed.addEventListener("click",()=>{
        if(turn){
            if(boxed.innerText==="X" || boxed.innerText==="O"){
                boxed.innerText=boxed.innerText;
            }
            else{
            boxed.innerText="X";
            turn=false;
            } 
            check();
        }
        else{
            if(boxed.innerText==="X" || boxed.innerText==="O"){
                boxed.innerText=boxed.innerText;
            }
            else{
                boxed.innerText="O";
                turn=true;
            } 
            check();
        }
    });
})


function check() {
    for (let con of wincon) {
        let [a,b,c] = con;
        if (cell[a].innerText!=="" && cell[a].innerText===cell[b].innerText && cell[a].innerText===cell[c].innerText) {
            console.log(`Winning combination: ${con}`);
            return;
        }
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    handlePlayerDetails();
    display();
});
