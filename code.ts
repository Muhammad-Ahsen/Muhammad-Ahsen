// Toggle the visibility of the "Skills" section
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleSkillsBtn.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});

// Toggle the visibility of the "Education" section
const toggleEducationBtn = document.getElementById('toggleEducationBtn') as HTMLButtonElement;
const educationSection = document.getElementById('education') as HTMLElement;

toggleEducationBtn.addEventListener('click', () => {
  if (educationSection.style.display === 'none') {
    educationSection.style.display = 'block';
  } else {
    educationSection.style.display = 'none';
  }
});

// Toggle the visibility of the "Work Experience" section
const toggleWorkExperienceBtn = document.getElementById('toggleWorkExperienceBtn') as HTMLButtonElement;
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;

toggleWorkExperienceBtn.addEventListener('click', () => {
  if (workExperienceSection.style.display === 'none') {
    workExperienceSection.style.display = 'block';
  } else {
    workExperienceSection.style.display = 'none';
  }
})