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
let cell=document.querySelector(".cell");
cell.addEventListener("click",()=>{
    cell.innerText="X";
});

document.addEventListener("DOMContentLoaded",()=>{
    handlePlayerDetails();
    display();
});
