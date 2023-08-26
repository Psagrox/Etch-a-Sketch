const colorPicker = document.getElementByID ("colorPicker");


colorPicker.addEventListener("input", function (e){
    const selectedColor = e.target.value;
    //Use the variable selectedColor to register the option that the user choose.
});

const rgb = document.getElementById("RGB");

rgb.addEventListener("click", function() {
    function generateNumber(number){
        return Math.floor(Math.random()*number);
    };

    function rgbColor(){
        var colorRgb = "rgb(" + 
        generateNumber(255) + 
        "," + 
        generateNumber(255) + 
        "," + 
        generateNumber(255) + 
        ")";
        return colorRgb;
    }

    const radomColor = rgbColor();
    //use the random RGB color generated to update de streak of my canvas.
});

const canvas = document.getElementById("etchASketchCanvas");
const context = canvas.getContext("2d");

//Background color configuration
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

//Lead color configuration
let currentColor = "black";
context.strokeStyle = currentColor;

//Drawing events
let isDrawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

function startDrawing(e){
    isDrawing = true;
    context.beginPatch();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function draw(e){
    if (!isDrawing) return;
    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.strokeStyle();
}

function stopDrawing() {
    isDrawing = false;
    context.closePath();
}

