// Tutorial for fancy shit lol : https://www.youtube.com/watch?v=JkeyKeK3V24

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const head = document.querySelector('.myHead')
const container = document.querySelector('.container')

let loadFirst = 0

let intFirst = setInterval(blurring, 15)

function blurring(){
    loadFirst++
    if(loadFirst > 99){
        clearInterval(intFirst)
    }
    loadText.innerText = `${loadFirst}%`
    loadText.style.opacity = scale(loadFirst, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loadFirst, 0, 100, 30, 0)}px)`
    head.style.opacity = scale(loadFirst, 0, 100, 0, 1)
    container.style.opacity = scale(loadFirst, 0, 100, 0, 1)
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// From : https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

