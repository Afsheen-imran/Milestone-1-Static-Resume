const toggleButton = document.getElementById("toggle-skills") as HTMLElement;
const skills = document.getElementById("skills") as HTMLElement;

// Set initial display for skills to ensure consistency
skills.style.display = "block";

toggleButton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
});
