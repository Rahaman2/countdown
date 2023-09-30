document.addEventListener("DOMContentLoaded", function () {
    const meetingTimeInput = document.getElementById("meeting-time");
    const startButton = document.getElementById("start-countdown");
    const countdownDisplay = document.getElementById("countdown");

    let countdownInterval;

    startButton.addEventListener("click", () => {
        const meetingTime = new Date(meetingTimeInput.value);
        const currentTime = new Date();

        if (meetingTime <= currentTime) {
            countdownDisplay.textContent = "Invalid time. The time cannot be in the past and " + meetingTime +" is a past time";
            return;
        }

        countdownInterval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const timeLeft = meetingTime - new Date();

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Meeting time! REdi";
                return;
            }
            const hours = Math.floor(timeLeft / (60 * 60000))
            const minutes = Math.floor(timeLeft / 60000);
            const seconds = Math.floor((timeLeft % 60000) / 1000);
            

            countdownDisplay.textContent = `${minutes}m ${seconds}s`;
        }
    });
});