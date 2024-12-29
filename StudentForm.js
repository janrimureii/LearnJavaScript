//empty arrays
let studentNames = [];
let studentCourse = [];

//table data
let names = document.getElementById("student-names");
let course = document.getElementById("student-program");

//Form
const nametb = document.getElementById("stud-name");
const programtb = document.getElementById("stud-program");
const submit = document.getElementById("submit");
const displaystudent = document.getElementById("display");

//Adding a value inside the array
submit.addEventListener('click',() => {
  studentNames.unshift(nametb.value);
  studentCourse.unshift(programtb.value);
    alert('ADDED');
});

//displaying the array
display.addEventListener('click', () => {
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

    alert("Display");
});


