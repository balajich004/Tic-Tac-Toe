let cell=document.querySelectorAll(".cell");
const resetb=document.querySelector(".resetb");
const resultc=document.querySelector(".resultc");
const p1s=document.querySelector(".p1");
const p2s=document.querySelector(".p2");
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
let player1Count=0,player2Count=0;
/*eventlisteners*/
document.addEventListener("DOMContentLoaded",()=>{
    handlePlayerDetails();
    display();
});
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
});
resetb.addEventListener("click",()=>{
    reset();
});
/*functions*/
function reset(){
    for(celled of cell){
        celled.innerText="";
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
function check() {
    for (let con of wincon) {
        let [a,b,c] = con;
        if (cell[a].innerText!=="" && cell[a].innerText===cell[b].innerText && cell[a].innerText===cell[c].innerText) {
            resultc.innerText=`Winning combination: ${con}`;
            if(cell[a].innerText==="X"){
                p1s.innerText=++player1Count;
            }
            else{
                p2s.innerText=++player2Count;
            }
            reset();
            return;
        }
    }
}


