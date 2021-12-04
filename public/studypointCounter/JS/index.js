import { course } from './course.js';
/*---VARIABLES---*/
let coursesList = [];
let editMode = false;

/*---FUNCTIONS--- */
const createCoursesList = () => {
    coursesList.push(new course("Web gevorderd", 6, 180));
    coursesList.push(new course("Gip 1", 3, 90));
    coursesList.push(new course("Gip 2", 4, 120));
    console.log("courseList: ", coursesList);
}

const createTableElements = () => {
    let tableString = "";
    let i = 0;
    coursesList.forEach(element => {
        tableString += `
        <tr>
            <td>${element.CourseName}</td>
            <td>${element.Studypoints}</td>
            <td>${element.EstimatedHours}</td>
            <td id="time${i}"><input id="inp${i}" type="number" value="${element.TimeSpent}" disabled></input></td>
            <td> <button id="btn${i}" class="btn btn-danger">+</button> </td>
        </tr>`;
        i++;
    });
    console.log("Dynamic HTML: ", tableString);
    document.querySelector("#coursesTableContent").innerHTML += tableString;
}

const getButtons = () => {
    let buttons = [];
    for (let index = 0; index < coursesList.length; index++) {
        buttons.push(document.querySelector(`#btn${index}`));
    }
    console.log("Dynamic Buttons: ", buttons);
    return buttons
}

const addEvents = (buttonArray) => {
    buttonArray.map((btn, i) => {
        btn.addEventListener("click", () => {
            coursesList[i].addTime();
            if (coursesList[i].TimeSpent > coursesList[i].EstimatedHours) {
                console.log("Je spendeert meer tijd dan verwacht");
            }
            document.querySelector(`#time${i}`).innerHTML = `<input id="inp${i}" type="number" value="${coursesList[i].TimeSpent}" disabled></input>`
        });
    })
}

const updateBtnEvent = () => {
    document.querySelector("#editBTN").addEventListener("click", () => {
        coursesList.map((course, i) => {
            if (!editMode) {
                document.querySelector(`#inp${i}`).removeAttribute("disabled");
            } else {
                coursesList[i].editTime(document.querySelector(`#inp${i}`).value);
                document.querySelector(`#time${i}`).innerHTML = `<input id="inp${i}" type="number" value="${coursesList[i].TimeSpent}" disabled></input>`
            }
        })
        editMode = !editMode;
    })
}

/*---ACTUALCODE---*/
createCoursesList();
createTableElements();
let buttonList = getButtons();
addEvents(buttonList);
updateBtnEvent();