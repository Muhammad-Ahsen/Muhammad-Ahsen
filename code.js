// Toggle the visibility of the "Skills" section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skills');
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
// Toggle the visibility of the "Education" section
var toggleEducationBtn = document.getElementById('toggleEducationBtn');
var educationSection = document.getElementById('education');
toggleEducationBtn.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    }
    else {
        educationSection.style.display = 'none';
    }
});
// Toggle the visibility of the "Work Experience" section
var toggleWorkExperienceBtn = document.getElementById('toggleWorkExperienceBtn');
var workExperienceSection = document.getElementById('work-experience');
toggleWorkExperienceBtn.addEventListener('click', function () {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
    }
    else {
        workExperienceSection.style.display = 'none';
    }
});
