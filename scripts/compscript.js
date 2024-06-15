let cell=document.querySelectorAll(".cell");
const resetb=document.querySelector(".resetb");
const resultc=document.querySelector(".resultc");
const p1s=document.querySelector(".p1");
const p2s=document.querySelector(".p2");
const newgameb=document.querySelector(".newgameb");
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
cell.forEach((boxed)=>{
    boxed.addEventListener("click",()=>{
        if(turn){
            if(boxed.innerText==="X" || boxed.innerText==="O"){
                boxed.innerText=boxed.innerText;
            }
            else{
            boxed.innerText="X";
            } 
            let rmove=Math.random();
            if(rmove>0 && rmove<1/3){
                if(cell[0].innerText==="")
                    cell[0].innerText="O";
                else if(cell[1].innerText==="")
                    cell[1].innerText="O";
                else if(cell[2].innerText==="")
                    cell[2].innerText="O";
                else
                    putfor1();
            }
            else if(rmove>1/3 && rmove<2/3){
                if(cell[3].innerText==="")
                    cell[3].innerText="O";
                else if(cell[4].innerText==="")
                    cell[4].innerText="O";
                else if(cell[5].innerText==="")
                    cell[5].innerText="O";
                else 
                    putfor2();
            }
            if(rmove>2/3 && rmove<3/3){
                if(cell[6].innerText==="")
                    cell[6].innerText="O";
                else if(cell[7].innerText==="")
                    cell[7].innerText="O";
                else if(cell[8].innerText==="")
                    cell[8].innerText="O";
                else
                    putfor3();
            }
            check();
        }
    });
});
resetb.addEventListener("click",()=>{
    reset();
});
newgameb.addEventListener("click",()=>{
    player1Count=0;
    player2Count=0;
    setgame();
    reset();
});
/*functions*/
function reset(){
    for(celled of cell){
        celled.innerText="";
    }
    turn=true;
}

function check() {
    for (let con of wincon) {
        let [a,b,c] = con;
        if (cell[a].innerText!=="" && cell[a].innerText===cell[b].innerText && cell[a].innerText===cell[c].innerText) {
            if(cell[a].innerText==="X"){
                p1s.innerText=++player1Count;
                resultc.innerText=`You win Hero, you defeated the computer
                Your Winning combination: ${con}`;
            }
            else{
                p2s.innerText=++player2Count;
                resultc.innerText=`You lose son, you were defeated by the computer
                 Your Winning combination: ${con}`;
            }
            reset();
            return;
        }
    }
    let isTie=true;
    for (let boxed of cell) {
        if(boxed.innerText===""){
            isTie=false;
            break;
        }
    }
    if(isTie){
        resultc.innerText="It's a tie!";
        reset();
    }
}
function setgame(){
    p1s.innerText=player1Count;
    p2s.innerText=player2Count;
    resultc.innerHTML="";
}
function putfor1(){
        if(cell[3].innerText==="")
            cell[3].innerText="O";
        else if(cell[4].innerText==="")
            cell[4].innerText="O";
        else if(cell[5].innerText==="")
            cell[5].innerText="O";
        else if(cell[6].innerText==="")
            cell[6].innerText="O";
        else if(cell[7].innerText==="")
            cell[7].innerText="O";
        else if(cell[8].innerText==="")
            cell[8].innerText="O";
}
function putfor2(){
    if(cell[0].innerText==="")
        cell[0].innerText="O";
    else if(cell[1].innerText==="")
        cell[1].innerText="O";
    else if(cell[2].innerText==="")
        cell[2].innerText="O";
    else if(cell[6].innerText==="")
        cell[6].innerText="O";
    else if(cell[7].innerText==="")
        cell[7].innerText="O";
    else if(cell[8].innerText==="")
        cell[8].innerText="O";
}
function putfor3(){
    if(cell[0].innerText==="")
        cell[0].innerText="O";
    else if(cell[1].innerText==="")
        cell[1].innerText="O";
    else if(cell[2].innerText==="")
        cell[2].innerText="O";
    else if(cell[3].innerText==="")
        cell[3].innerText="O";
    else if(cell[4].innerText==="")
        cell[4].innerText="O";
    else if(cell[5].innerText==="")
        cell[5].innerText="O";
}
