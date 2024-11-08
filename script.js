var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
// Set initial display for skills to ensure consistency
skills.style.display = "block";
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
