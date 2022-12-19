/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversionValue = document.getElementById("conversion-value")

const convertBtn = document.getElementById("convert-btn")

let lengthOutput = document.getElementById("converted-length")

function fetchInputValue() {
    return Number(conversionValue.value)
}


function convert() {
    let metersToFeet = Number(conversionValue.value) * 3.28
    let feetToMeters = Number(conversionValue.value) / 3.281
    lengthOutput.innerHTML = `
    <p id="converted-length" class="converted-output-txt">${conversionValue.value} meters = ${metersToFeet.toFixed(3)} feet | ${conversionValue.value} feet = ${feetToMeters.toFixed(3)} meters</p>`
    console.log(metersToFeet)
}

console.log(typeof Number(conversionValue.value))
convertBtn.addEventListener("click", convert)
