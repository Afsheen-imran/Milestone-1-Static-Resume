const showNextBtn = document.getElementById('show-next-btn') as HTMLButtonElement;

const educationSection = document.getElementById('education') as HTMLElement;
const skillsSection = document.getElementById('skills') as HTMLElement;
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;

let currentStep = 0; // Step counter to track which section to show next

// Initially hide all sections except personal info
educationSection.style.display = 'none';
skillsSection.style.display = 'none';
workExperienceSection.style.display = 'none';

// Button click event to show sections one by one
showNextBtn.addEventListener('click', () => {
  if (currentStep === 0) {
    // Show Education section first
    educationSection.style.display = 'block';
    showNextBtn.textContent = 'Show Skills';
  } else if (currentStep === 1) {
    // Show Skills section next
    skillsSection.style.display = 'block';
    showNextBtn.textContent = 'Show Work Experience';
  } else if (currentStep === 2) {
    // Show Work Experience section last
    workExperienceSection.style.display = 'block';
    showNextBtn.textContent = 'All Sections Visible';
    showNextBtn.disabled = true; // Disable the button after all sections are shown
  }
  currentStep++; // Move to the next step
});
