let boxes = document.querySelectorAll(".box") ;
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContanir=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;

let arr =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[2,4,6],[6,7,8],]; 

const resetGame =() =>{
    turnO = true;
    enabalBoxes();
    msgContanir.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText="O";
        turnO = false;
       }else {
        box.innerText="X"
        turnO = true;
       }
       box.disabled = true;


       checkWinner();
    })
});

const disableBoxes =()=>{
    for (const box of boxes) {
        box.disabled = true;
        
    }
}; 

const enabalBoxes =()=>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText="";
        
    }
}; 

 const showWinner =(winner) =>{
 msg.innerText=`Congratulations, Winner is ${winner}`;
 msgContanir.classList.remove("hide");
 disableBoxes();
  
 }
const checkWinner = () =>{
    for(pattern of arr){
     let pos1val= boxes[pattern[0]].innerText;
     let pos2val= boxes[pattern[1]].innerText;
     let pos3val= boxes[pattern[2]].innerText;

    
   
       if(pos1val !="" && pos2val !="" && pos3val !=""){
           if(pos1val === pos2val && pos1val === pos3val){
                showWinner(pos1val);
           } 
        }
   
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);