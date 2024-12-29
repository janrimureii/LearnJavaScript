let studentNames = [];
let studentCourse = [];

const nametb = document.getElementById("stud-name");
const programtb = document.getElementById("stud-program");
const button = document.getElementById("submit");

let names = document.getElementById("student-names");
let course = document.getElementById("student-program");

function pushstudname() {
    names.innerHTML = nametb.value;
}

button.addEventListener('click',() => {
    studentNames.push(nametb);
    alert(studentNames);
});





document.getElementById("text").innerHTML="Welcome back students";

studentNames.forEach(items => {
    let line1 = document.createElement("p");
    line1.textContent = items;
    names.appendChild(line1);
});

studentCourse.forEach(items => {
    let line2 = document.createElement("p");
    line2.textContent = items;
    course.appendChild(line2);
});