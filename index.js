/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversionValue = document.getElementById("conversion-value")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("converted-length")
const volumeOutput = document.getElementById("converted-volume")
const massOutput = document.getElementById("converted-mass")


function convert(unitToUnit1,unitToUnit2,elementID, conversionFactor) {
    unitToUnit1 = Number(conversionValue.value) * conversionFactor
     unitToUnit2 = Number(conversionValue.value) / conversionFactor
     elementID.innerHTML = `
    <p id="converted-length" class="converted-output-txt">${conversionValue.value} meters = ${unitToUnit1.toFixed(3)} feet | ${conversionValue.value} feet = ${unitToUnit2.toFixed(3)} meters</p>`
}

convertBtn.addEventListener("click", () => {
    convert("metersToFeet", "feetToMeters", lengthOutput, 3.281)
    convert("litersToGallons", "gallonsToLiters", volumeOutput, 0.264)
    convert("kilogramsToPounds", "poundsToKilograms", massOutput, 2.204)
})