var resumeForm = document.getElementById("resume-form");
var resumeDisplayContainer = document.getElementById("resume-display");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    var resumeBuilder = "\n<h2><b>Resume</b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b> ".concat(name, "</p>\n<p><b>Phone:</b> ").concat(phone, "</p>\n<p><b>Email:</b> ").concat(email, "</p>\n<h3>Education</h3>\n<p>").concat(education, "</p>\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    if (resumeDisplayContainer) {
        resumeDisplayContainer.innerHTML = resumeBuilder;
    }
    else {
        console.error("The resume display element is missing");
    }
});
