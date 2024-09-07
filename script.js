var showNextBtn = document.getElementById('show-next-btn');
var educationSection = document.getElementById('education');
var skillsSection = document.getElementById('skills');
var workExperienceSection = document.getElementById('work-experience');
var currentStep = 0; // Step counter to track which section to show next
// Initially hide all sections except personal info
educationSection.style.display = 'none';
skillsSection.style.display = 'none';
workExperienceSection.style.display = 'none';
// Button click event to show sections one by one
showNextBtn.addEventListener('click', function () {
    if (currentStep === 0) {
        // Show Education section first
        educationSection.style.display = 'block';
        showNextBtn.textContent = 'Show Skills';
    }
    else if (currentStep === 1) {
        // Show Skills section next
        skillsSection.style.display = 'block';
        showNextBtn.textContent = 'Show Work Experience';
    }
    else if (currentStep === 2) {
        // Show Work Experience section last
        workExperienceSection.style.display = 'block';
        showNextBtn.textContent = 'All Sections Visible';
        showNextBtn.disabled = true; // Disable the button after all sections are shown
    }
    currentStep++; // Move to the next step
});
