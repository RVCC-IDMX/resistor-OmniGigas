import { getResistorOhms } from './resistor.js';

const color0 = document.querySelector('#color0')
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const color3 = document.querySelector('#color3')
const answer = document.querySelector('.answer')
const b0 = document.querySelector('#b0')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const bands = {
    color1: 'red',
    color2: 'green',
    multiplier: 'violet',
    tolerance: 'gold'
}
console.log(getResistorOhms(bands))


color0.addEventListener('click', e => {
    const color = e.target.innerHTML
    b0.classList.remove(bands.color1)
    bands.color1 = color
    b0.classList.add(bands.color1)
    answer.innerHTML = getResistorOhms(bands)
})

color1.addEventListener('click', e => {
    const color = e.target.innerHTML
    b1.classList.remove(bands.color2)
    bands.color2 = color
    b1.classList.add(bands.color2)
    answer.innerHTML = getResistorOhms(bands)
})

color2.addEventListener('click', e => {
    const color = e.target.innerHTML
    b2.classList.remove(bands.multiplier)
    bands.multiplier = color
    b2.classList.add(bands.multiplier)
    answer.innerHTML = getResistorOhms(bands)
})

color3.addEventListener('click', e => {
    const color = e.target.innerHTML
    b3.classList.remove(bands.tolerance)
    bands.tolerance = color
    b3.classList.add(bands.tolerance)
    answer.innerHTML = getResistorOhms(bands)
})