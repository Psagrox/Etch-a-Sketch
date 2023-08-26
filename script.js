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

