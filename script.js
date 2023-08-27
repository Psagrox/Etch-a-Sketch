let colorPicker = document.getElementById ("colorPicker");

colorPicker.addEventListener("input", function (e){
    const choice =e.target.value;
    //use the value selected to change the color of the lead
})


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
        square.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", square);
    }
};

function changeSize(input){
    if (input >=2 && input <= 100){ 
        populateBoard(input);
    } else {
        console.log("too many squares");
        alert("Invalid number, please complete with values between 2 and 100")
    };
    
};




function colorSquare (){
    this.style.backgroundColor = color;
    //adding what color the function are going to use
}

function changeColor (choice) {
    color = choice;
}