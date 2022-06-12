// const d = new Date();
$("#currentDay").html(moment().format('dddd, MMMM Do'));

const currentHour = moment().hour(); // Number

// this determins the loop staying between the set hours of 9am and 5pm and assigns the class that determins the colour it is highlighted based on a time of day
for (let i = 9; i <= 17; i++) {
    $(`#hour${i}input`).html(localStorage.getItem(`hour${i}input`))
    $(`#hour${i}`).on('submit', function (event) {
        event.preventDefault()
        localStorage.setItem(`hour${i}input`, event.target.elements.userinput.value);
    })
    if (i < currentHour) {
        $(`#hour${i}input`).addClass('past')
    }
    if (i === currentHour) {
        $(`#hour${i}input`).addClass('present')
    }
    if (i > currentHour) {
        $(`#hour${i}input`).addClass('future')
    }
}
