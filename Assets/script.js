// const d = new Date();
document.getElementById("currentDay").innerHTML = moment().format('dddd, MMMM Do')

const currentHour = moment().hour(); // Number

// this determins the loop staying between the set hours of 9am and 5pm and assigns the class that determins the colour it is highlighted based on a time of day
for (let i = 9; i <= 17; i++) {
    document.getElementById(`hour${i}input`).innerHTML = localStorage.getItem(`hour${i}input`)
    document.getElementById(`hour${i}`).addEventListener('submit', function (event) {
        event.preventDefault()
        localStorage.setItem(`hour${i}input`, event.target.elements.userinput.value);
    })
    if (i < currentHour) {
        document.getElementById(`hour${i}input`).classList.add('past')
    }
    if (i === currentHour) {
        document.getElementById(`hour${i}input`).classList.add('present')
    }
    if (i > currentHour) {
        document.getElementById(`hour${i}input`).classList.add('future')
    }
}
