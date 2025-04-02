// const textBox = document.getElementById('textBox');
// const toFahrenheit = document.getElementById('toFahrenheit');
// const toCelsius = document.getElementById('toCelsius');
// const result = document.getElementById('result');

// let temp;
// function convert(){
//     if(toFahrenheit.checked){
//         temp = Number(textBox.Value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.Value);
//         temp = temp - 32  * 5 / 9;
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a Unit";
//     }
// }
const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;
function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);  // Corrected this line
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);  // Corrected this line
        temp = (temp - 32) * 5 / 9;  // Fixed the formula for Celsius conversion
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}

