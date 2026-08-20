const spanButton = document.getElementsByClassName("searching-button");


function toggleVisible() {
    const inputBar = document.getElementById("searching");

    if (inputBar.style.display === "none") {
        inputBar.style.display = "block";
    } else {
        inputBar.style.display = "none";
    }
}

const launches = document.querySelector(".launches");

fetch("../data/new_information.json")
    .then(res => res.json())
    .then(data => {
        const updates = document.querySelector(".updates");
        

        data.forEach(item => {
            const articleRow = document.createElement("div");
            articleRow.classList.add("row");

            articleRow.innerHTML = `
                <h3>${item.title}</h3>
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Description:</strong>  ${item.description}</p>
                <hr>
            `;

            if (item.type === "update") {
                updates.appendChild(articleRow);
            } else {
                launches.appendChild(articleRow);
            }
        });
    });

fetch("../data/new_information.json")
    .then(res => res.json())
    .then(data => {
        const today = new Date();
        const eventList = document.getElementById("event-list");

        const launches = data.filter(item => itemtype = "launch");

        launches.sort((a, b) => new Date(a.date) - new Date(b.date));

        const upcoming = launches.filter(e => new Date(e.date) >= today).slice(0, 2);

        upcoming.forEach(event => {
            const li = document.createElement("li");
            const date = new Date(event.date);
            const formattedDate = date.toLocaleDateString("zh-HK", { month: "short", day: "numeric" });
            li.textContent = `${formattedDate} - ${event.title}`;
            eventList.appendChild(li);
        });
    });