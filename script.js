const form = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskName = document.querySelector(".task-name").value;
        const taskProgress = document.getElementById("task-progress").value;

        const html = `
            <div class="tasklist">
                <h3>${taskName}</h3>
                <h3>Show Percentage</h3>
                <h2>${taskProgress}%</h2>
                <button class="add-btn">Progress</button>
            </div>
        `;
        taskList.insertAdjacentHTML("beforeend", html);
        taskList.style.marginLeft = "15%";
        form.reset();

    });