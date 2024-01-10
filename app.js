let celciusInput = document.querySelector('#celcius>input')
let FahrenheitInput = document.querySelector('#Fahrenheit>input')
let kelvinInput = document.querySelector('#kelvin>input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let FTemp =(cTemp*(9/5)) +32
    let kTemp = cTemp + 273.15

    FahrenheitInput.value = roundNumber(FTemp)
    kelvinInput.value = roundNumber(kTemp)
})``

FahrenheitInput.addEventListener('input', function(){
    let FTemp = parseFloat(FahrenheitInput.value)
    let cTemp =(FTemp - 32) * (5/9)
    let kTemp = (FTemp-32) * (5/9) + 273.15

    FahrenheitInput.value = roundNumber(FTemp)
    kelvinInput.value = roundNumber(kTemp)
})
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp =kTemp - 273.15
    let FTemp = (kTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(cTemp)
    FahrenheitInput.value = roundNumber(FTemp)
})

btn.addEventListener('click',()=>{
    celciusInput.value=""
    FahrenheitInput.value=""
    kelvinInput.value=""
})