const colorPicker = document.getElementByID ("colorPicker");


colorPicker.addEventListener("input", function (event){
    const selectedColor = event.target.value;
    //Use the variable selectedColor to register the option that the user choose.
});

const rgb = document.getElementById("RGB");

rgb.addEventListener("click", function(){
    function generateNumber(number){
        return (Math.random()*number).toFixed(0);
    };

    function rgbColor(){
        var colorRgb = "(" + generateNumber(255) + "," + generateNumber(255) + "," + generateNumber(255) + ")";
        return "rgb" + colorRgb;
    }
});