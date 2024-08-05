let Name  = prompt("Enter Player Name For Taking'O' .");
let Name1 = prompt("Enter Player Name For Taking 'X'");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msgcontainer = document.querySelector(".msg-container");
let mhide = document.querySelector(".m");
let msg = document.querySelector("#msg");
let count = document.querySelector("#count1");
let counta = document.querySelector("#count2");
let ForO= document.querySelector("#For-O");
let ForX= document.querySelector("#For-X");
let count1 = 0;
let count2 =0;

ForO.innerText = `${Name}`;
ForX.innerText = `${Name1}`;
let turnO = true; //player X , player O

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
           
        }
        else {
            box.innerText = "X"
            
            turnO = true;
            
            
        }
    
        box.disabled = true;

        checkWinner();
    });
});

//for disable boxes

const Disableboxes = () =>{
    for (let box of boxes)
    {
        box.disabled = true;
    }
}

//for Enable boxes

const Enableboxes = () =>{
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
       
    }
}
// for declare winner 

const showWinner = (winner) =>{
    msg.innerText = `Congratulations !${winner} . You Won the Game .`;
    count1++; 
    count.innerText = `${count1}`;
    counta.innerText = `${count2}`;
    msgcontainer.classList.remove("hide"); 
    mhide.classList.add("hide");
    Disableboxes();
    

}

//for check winner
const checkWinner = () => {

    for (let pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val=== pos2val && pos2val===pos3val)
            {
                    if(pos1val === "O" && pos2val==="O" && pos3val=== "O")
                    {
                       showWinner(Name); 
                       count2++
                    }

                    if(pos1val === "X" && pos2val==="X" && pos3val=== "X")
                    {
                        showWinner(Name1);
                    
                    }
                
                
            }
        }
    }

};

// for reset game 

const resetgame =  () => {
    let turnO = true;
    Enableboxes();
    msgcontainer.classList.add("hide");
    mhide.classList.remove("hide")
    
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);