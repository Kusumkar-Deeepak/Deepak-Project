document.addEventListener("DOMContentLoaded", function () {
    const dateDisplay = document.getElementById("dateDisplay");
    const habitBody = document.getElementById("habitBody");

    const times = [
        "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
        "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
    ];

    const habits = ["Exercise", "Healthy Breakfast", "Read", "Work/Study", "Evening Walk"];

    // Display current date
    const today = new Date().toLocaleDateString("en-US", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    dateDisplay.textContent = today;

    // Load saved data from local storage
    const savedData = JSON.parse(localStorage.getItem("habitTrackerData")) || {};

    // Populate table
    times.forEach((time, rowIndex) => {
        const row = document.createElement("tr");
        const timeCell = document.createElement("td");
        timeCell.textContent = time;
        row.appendChild(timeCell);

        habits.forEach((habit, habitIndex) => {
            const cell = document.createElement("td");
            const button = document.createElement("button");

            const key = `${time}-${habit}`;
            const isCompleted = savedData[key];

            button.className = isCompleted ? "toggle-btn completed" : "toggle-btn not-completed";
            button.textContent = isCompleted ? "✔" : "✘";

            button.addEventListener("click", () => {
                const newStatus = button.classList.contains("not-completed");

                button.className = newStatus ? "toggle-btn completed" : "toggle-btn not-completed";
                button.textContent = newStatus ? "✔" : "✘";

                // Save updated status in local storage
                savedData[key] = newStatus;
                localStorage.setItem("habitTrackerData", JSON.stringify(savedData));
            });

            cell.appendChild(button);
            row.appendChild(cell);
        });

        habitBody.appendChild(row);
    });
});
