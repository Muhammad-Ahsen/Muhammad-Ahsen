const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const profilePic = (document.getElementById('profilePic') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

  // Populate the resume template
  (document.getElementById('displayName') as HTMLElement).textContent = name;
  (document.getElementById('displayEmail') as HTMLElement).textContent = email;

  // Display profile picture if provided
  const profilePicElement = document.getElementById('displayProfilePic') as HTMLImageElement;
  if (profilePic) {
    profilePicElement.src = profilePic;
    profilePicElement.style.display = 'block';
  } else {
    profilePicElement.style.display = 'none';
  }

  (document.getElementById('displayEducation') as HTMLElement).textContent = education;

  // Generate skill list
  const skillList = document.getElementById('displaySkills') as HTMLElement;
  skillList.innerHTML = '';  // Clear any previous content
  skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = skill.trim();
    skillList.appendChild(listItem);
  });

  (document.getElementById('displayWorkExperience') as HTMLElement).textContent = workExperience;

  // Show the generated resume
  resumeDisplay.style.display = 'block';
});


