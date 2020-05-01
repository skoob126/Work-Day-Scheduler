const timeArray= ["9am","10am","11am","12pm","1pm","2pm","3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"];

function setTense(time){
    const timeAsInt = parseInt(moment(time, 'ha').format('H'))
    const currentTimeAsInt = parseInt(moment().format('H'));
    const timeDiff = currentTimeAsInt - timeAsInt;
    if (timeDiff > 0) {
        return 'past'
    }
    if (timeDiff < 0) {
        return 'future'
    }
    if (timeDiff === 0) {
        return 'present'
    }
}

for (let index = 0; index < timeArray.length; index++) {
    const time = timeArray[index];

    $(".container").append(`
        <div class="row">
            <div class="time-block">
                <div class="hour">${time}</div>
            </div>
            <textarea id="${time}TextArea" class="${setTense(time)}"></textarea>
            <button id="${time}Save" class="saveBtn">X</button>
        </div>
    `)

    const saveButton = $("#" + time + "Save");
    const textArea = $("#" + time + "TextArea")

    saveButton.click(function() {
        localStorage.setItem(time, textArea.val())
    })

    if (localStorage.getItem(time)) {
        textArea.val(localStorage.getItem(time))
    }
}

$("#currentDay").html(moment().format('dddd, MMMM Do YYYY'));