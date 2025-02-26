let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn =document.querySelector('#new-btn');
let msgContainer =document.querySelector(".msg-cont");
let msg =document.querySelector("#msg");

let turnO = true;


const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]

];

const resetGame =()=>{
  turnO=true;
  enableBtn();
  msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    if(turnO === true){
      box.innerText= "O";
      box.classList.add('o');
      turnO =false;
    }else{
      box.innerText = "X";
      box.classList.add('x');
      turnO =true;
    }
    box.disabled = true;
    checkWinner();
  })
})


const enableBtn =()=>{
  for(let box of boxes){
    box.disabled= false;
    box.innerText="";
  }
}

const disabled =()=>{
  for(let box of boxes){
    box.disabled= true;
  }
}


function checkWinner(){
  for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val =boxes[pattern[1]].innerText;
    let pos3Val  =boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val != "" && pos3Val !=""){
      if(pos1Val === pos2Val && pos2Val ===pos3Val){
        // console.log("winner",pos1Val);
        showWinner(pos1Val);
      }
    }
    // console.log(pos1Val);
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(, boxes[pattern[1]], boxes[pattern[2]]);
  }
  
}

const showWinner =(winner)=>{
  msg.innerText = `Congratulation, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabled();

}

newBtn.addEventListener('click',resetGame)
resetBtn.addEventListener("click",resetGame);