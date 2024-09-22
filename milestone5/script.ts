
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayContainer = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("Shareable-Link-Container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("Shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();


  const username = (document.getElementById("username") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;


  const resumeBuilder = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
  `;


  const resumeData = { name, phone, email, education, experience, skills };
  localStorage.setItem(username, JSON.stringify(resumeData));

  
  resumeDisplayContainer.innerHTML = resumeBuilder;

  
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
  shareableLinkContainer.style.display = "block";  
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});


downloadPdfButton.addEventListener("click", () => {
  window.print();
});


window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value = username;
      (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
      (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
      (document.getElementById("education") as HTMLTextAreaElement).value = resumeData.education;
      (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;
      (document.getElementById("skills") as HTMLTextAreaElement).value = resumeData.skills;
    }
  }
});

