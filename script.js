function populateBoard(size) {
    let board = document.querySelector (".board");
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.remove());
    board.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    board.style.gridTemplateRows = 'repeat(${size}, 1fr)';


    let amount = size * size;

    for(let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", square);
    }
};



function changeSize(input){
    populateBoard(input);
};