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