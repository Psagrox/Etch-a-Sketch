let color = "black";
let colorPicker = document.getElementById ("colorPicker");
let click = false;
changeSize(16);

colorPicker.oninput = (e) => changeColor (e.target.value);

function populateBoard(size) {
    let board = document.querySelector (".board");
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size;

    for(let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare )
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
};

function changeSize(input){
    if (input >=2 && input <= 100){ 
        populateBoard(input);
        document.querySelector(".error").style.display = "none";
    } else {
        console.log("too many squares");
        document.querySelector(".error").style.display = "flex";
    };
    
};




function colorSquare (){
    if(click){
        if (color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            //generating a random color for the lead
        } else {
            this.style.backgroundColor = color;
            //adding what color the function are going to use
        }
    } 
}

function changeColor (choice) {
    color = choice;
    //update color
}

function resetBoard(){
    let board = document.querySelector (".board");
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor = "white");
}


document.body.onmousedown = () => (click = true);
document.body.onmouseup = () => (click = false);