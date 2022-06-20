// this is the script from momentjs.com for the current day, month and date the user is on the site
$("#currentDay").html(moment().format('dddd, MMMM Do'));

const currentHour = moment().hour();

// this determins the loop staying between the set hours of 9am and 5pm and assigns the class that determins the colour it is highlighted based on a time of day
for (let i = 9; i <= 17; i++) {
    // using "getItem" to get the previously saved "input" of each hour from local storage and setting the initial value of the input field to this value
    $(`#hour${i}input`).html(localStorage.getItem(`hour${i}input`))
    $(`#hour${i}`).on('submit', function (event) {
        // prevents the page refreshing so we dont lose data and don't flash while re-rendering the page
        event.preventDefault()
        // saves the input from UI into local storage
        localStorage.setItem(`hour${i}input`, event.target.elements.userinput.value);
    })
    // if statements relating to the time of day dictating the colour shown based on present time being 'past', 'present' or 'future' 
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
