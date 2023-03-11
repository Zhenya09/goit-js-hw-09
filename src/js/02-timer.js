import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timer = document.querySelector(".timer")
const daysSpan = timer.querySelector('[data-days]')
const hoursSpan = timer.querySelector('[data-hours]')
const minutesSpan = timer.querySelector('[data-minutes]')
const secondsSpan = timer.querySelector('[data-seconds]')

let countdownInterval

flatpickr("#datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: new Date(),
    defaultDate: new Date(),
    onChange: function (selectedDates, _dateStr) {
        clearInterval(countdownInterval)
        const selectedDate = selectedDates[0]
        countdownInterval = setInterval(() => {
            const now = new Date().getTime()
            const distance = selectedDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)
            daysSpan.textContent = days.toString().padStart(2, '0')
            hoursSpan.textContent = hours.toString().padStart(2, '0')
            minutesSpan.textContent = minutes.toString().padStart(2, '0')
            secondsSpan.textContent = seconds.toString().padStart(2, '0')
            if (distance < 0) {
                clearInterval(countdownInterval)
            }
        }, 1000)
    }
})