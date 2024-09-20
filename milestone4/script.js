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
    var resumeBuilder = "\n<h2><b>Editable Resume</b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    if (resumeDisplayContainer) {
        resumeDisplayContainer.innerHTML = resumeBuilder;
    }
    else {
        console.error("The resume display element is missing");
    }
});
