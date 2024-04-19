let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector("#new-btn");
let message = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true;


// 2d array

let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else {
            box.innerText = "X"
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const newbutton = () => {
    turnO = true;
    enableBoxes();
    message.classList.add("hide");

}
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
} 
const showWinner = (winner) => {
    message.innerText = `Congratulations, winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
}
const checkwinner = () => {
    for(let pattern of winpattern){
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;

        if (postVal1 != "" && postVal2 != "" && postVal3 != ""){
            if(postVal1 === postVal2 && postVal2 === postVal3){
                console.log("Winner" ,postVal1);
                showWinner(postVal1);
            }
        }
    }
}

newgamebtn.addEventListener("click", newbutton);