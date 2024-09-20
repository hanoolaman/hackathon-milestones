let resumeForm = document.getElementById("resume-form") as HTMLFormElement; 
let resumeDisplayContainer = document.getElementById(
  "resume-display"
) as HTMLDivElement;

resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  const resumeBuilder = `
<h2><b>Editable Resume</b></h2>
<h3><b>Personal Information</b></h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
<p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
<h3>Education</h3>
<p contenteditable="true">${education}</p>
<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;

  if (resumeDisplayContainer) {
    resumeDisplayContainer.innerHTML = resumeBuilder;
  } else {
    console.error("The resume display element is missing");
  }
}); 

