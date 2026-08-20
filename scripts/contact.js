const spanButton = document.getElementsByClassName("searching-button");


function toggleVisible() {
    const inputBar = document.getElementById("searching");

    if (inputBar.style.display === "none") {
        inputBar.style.display = "block";
    } else {
        inputBar.style.display = "none";
    }
}