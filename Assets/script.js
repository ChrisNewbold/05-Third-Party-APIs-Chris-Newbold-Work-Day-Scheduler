// const d = new Date();
document.getElementById("currentDay").innerHTML = moment().format('dddd, MMMM Do')
// get references from UI references
const uiHour9Row = document.getElementById('hour9')
const uiHour10Row = document.getElementById('hour10')
const uiHour11Row = document.getElementById('hour11')
const uiHour12Row = document.getElementById('hour12')
const uiHour13Row = document.getElementById('hour13')
const uiHour14Row = document.getElementById('hour14')
const uiHour15Row = document.getElementById('hour15')
const uiHour16Row = document.getElementById('hour16')
const uiHour17Row = document.getElementById('hour17')
const uiHour9RowInput = document.getElementById('hour9input')
const uiHour10RowInput = document.getElementById('hour10input')
const uiHour11RowInput = document.getElementById('hour11input')
const uiHour12RowInput = document.getElementById('hour12input')
const uiHour13RowInput = document.getElementById('hour13input')
const uiHour14RowInput = document.getElementById('hour14input')
const uiHour15RowInput = document.getElementById('hour15input')
const uiHour16RowInput = document.getElementById('hour16input')
const uiHour17RowInput = document.getElementById('hour17input')

const currentHour = moment().hour(); // Number
// set the inicial values of all hours from local storage
uiHour9RowInput.innerHTML = localStorage.getItem('hour9input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour9Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour9input', event.target.elements.userinput.value);
})
uiHour10RowInput.innerHTML = localStorage.getItem('hour10input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour10Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour10input', event.target.elements.userinput.value);
})
uiHour11RowInput.innerHTML = localStorage.getItem('hour11input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour11Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour11input', event.target.elements.userinput.value);
})
uiHour12RowInput.innerHTML = localStorage.getItem('hour12input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour12Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour12input', event.target.elements.userinput.value);
})
uiHour13RowInput.innerHTML = localStorage.getItem('hour13input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour13Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour13input', event.target.elements.userinput.value);
})
uiHour14RowInput.innerHTML = localStorage.getItem('hour14input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour14Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour14input', event.target.elements.userinput.value);
})
uiHour15RowInput.innerHTML = localStorage.getItem('hour15input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour15Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour15input', event.target.elements.userinput.value);
})
uiHour16RowInput.innerHTML = localStorage.getItem('hour16input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour16Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour15input', event.target.elements.userinput.value);
})
uiHour17RowInput.innerHTML = localStorage.getItem('hour17input')
// calls event of "submit" and saves the "value" to local storage and keeps the value on the front end
uiHour17Row.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.userinput.value)
    localStorage.setItem('hour17input', event.target.elements.userinput.value);
})
// this determins the loop staying between the set hours of 9am and 5pm and assigns the class that determins the colour it is highlighted based on a time of day
for (let i = 9; i <= 17; i++) {
    console.log(i)
    if (i < currentHour) {
        console.log(`${i} is less than ${currentHour}`)
        document.getElementById(`hour${i}input`).classList.add('past')
    }
    if (i === currentHour) {
        console.log(`${i} is ${currentHour}`)
        document.getElementById(`hour${i}input`).classList.add('present')
    }
    if (i > currentHour) {
        console.log(`${i} is more than ${currentHour}`)
        document.getElementById(`hour${i}input`).classList.add('future')
    }
}
