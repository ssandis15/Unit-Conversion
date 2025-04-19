
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//for lenght covertion
const toMeter = 3.281
const toFeet = 0.3048

//for volume conversion
const toGallons = 0.264172 
const toLitrs = 3.785

// for mass conversion
const toPounds = 2.204
const toKilos = 0.454

const convertBtn = document.querySelector('#convert-btn')
let inputEl = document.querySelector('#input-el')
let lengthResult = document.querySelector('#length-result')
let volumeResult = document.querySelector('#volume-result')
let massResult = document.querySelector('#mass-result')

convertBtn.addEventListener('click', function(){
    //meters and feets
     let metersToFeets = inputEl.value * toMeter
     let feetInput = inputEl.value
     let feetToMeters = feetInput * toFeet
     
     lengthResult.innerHTML =`${inputEl.value} meters = ${metersToFeets.toFixed(3)} feets | ${feetInput} feets = ${feetToMeters.toFixed(3)} meters` 
    
    // litrs and gallons 
     let litrsToGallons = inputEl.value * toGallons  
     let  gallonsToLitrs = inputEl.value * toLitrs
           
     volumeResult.innerHTML =`${inputEl.value} litrs = ${litrsToGallons.toFixed(3)} gallons| ${inputEl.value} gallons = ${gallonsToLitrs.toFixed(3)} litrs` 
     
     //pounds and killos
     1
     let kilosToPounds = inputEl.value * toPounds
     let poundsToKilos = inputEl.value * toKilos 
     
     massResult.innerHTML =`${inputEl.value} kilos = ${kilosToPounds.toFixed(3)} pounds| ${inputEl.value} pounds = ${poundsToKilos.toFixed(3)} kilos` 
})



