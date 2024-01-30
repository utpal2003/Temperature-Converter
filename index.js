const textbox = document.getElementById("textbox")
const tofarhenheit = document.getElementById("tofarhenheit")
const tocelcious = document.getElementById("tocelcious")
const result = document.getElementById("result");
let temp;

function convert(){
    if(tofarhenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `ANSWER:${temp.toFixed(1)}°F`;

    }
    else if(tocelcious.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `ANSWER:${temp.toFixed(1)}°C`;

    }
    else{
        result.textContent = "select a unit";
    }

}