
var title = document.getElementById("tle");
var priority = document.getElementById("pty");
var statuse = document.getElementById("sts");
var date = document.getElementById("dte");
var description = document.getElementById("desc");
var element = document.getElementById("sv");
var element1 = document.getElementById("delete");
var element2 = document.getElementById("edit");
var radiofeature = document.getElementById('Feature');
var radiobug = document.getElementById('Bug');
var to_do_tasks = document.getElementById("to-do-tasks");
var in_progress_tasks = document.getElementById("in-progress-tasks");
var done_tasks = document.getElementById("done-tasks");
var title1 = document.getElementById("tle_1");
var type1 = document.getElementById('bug1');
let type2 = document.getElementById('feature1');
var priority1 = document.getElementById("pty1");
var statuse1 = document.getElementById("sts1");
var date1 = document.getElementById("dte1");
var description1 = document.getElementById("desc1");
var element1 = document.getElementById("edt");
var index;
var i;






element.onclick = function createTask() {
    console.log('test');
    // create object of task
    if (radiofeature.checked) {
        type = radiofeature.id;
    } else if (radiobug.checked) {
        type = radiobug.id
    }
    const task = {
        title: title.value,
        type: type,
        priority: priority.value,
        status: statuse.value,
        date: date.value,
        description: description.value
    };
    // add task to array of tasks
    tasks.push(task);
    console.log(tasks);
    clearForm();
    display();


}


function display() {
    let todocount = 0;
    let inpgcount = 0;
    let donecount = 0;
    // Remove tasks elements
    to_do_tasks.innerHTML = "";
    in_progress_tasks.innerHTML = "";
    done_tasks.innerHTML = "";

    // Set Task count
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == 'To Do') {
            index = i;

            to_do_tasks.innerHTML += `
         <button class="d-flex w-100 border-0 border-top" onclick="updateTask(${i})"  data-bs-toggle="modal"
            data-bs-target="#taskBtn1" >
            <div class="text-green fs-4">
                <i class="fa-regular fa-clock ms-10px"></i> 
            </div>
            <div class="ms-10px">
                <div class="fs-3 ">${tasks[i].title}</div>
                <div class="">
                    <div class="fs-5 text-gray">#${i + 1} created in ${tasks[i].date}</div>
                    <div class="fs-5" title="${tasks[i].description}">${tasks[i].description.slice(0, 100)}</div>
                </div>
                <div class="my-10px">
                    <span class="bg-blue-500 p-5px px-10px text-white rounded-2">${tasks[i].priority}</span>
                    <span class="bg-gray-400 p-5px px-10px text-black rounded-2">${tasks[i].type}</span>
                    </div>
            </div>
        </button>`;

            todocount++;

        }
        else if (tasks[i].status == 'In Progress') {
            var new_button = `<button class="d-flex w-100 border-0 border-top"  onclick="updateTask(${i})" data-bs-toggle="modal"
                data-bs-target="#taskBtn1" >
            <div class="text-green fs-4">
                <i class="spinner-border spinner-border-sm ms-10px"></i>
            </div>
            <div class="ms-10px">
                <div class="fs-3 ">${tasks[i].title}</div>
                <div class="">
                    <div class="fs-5 text-gray">#${i + 1} created in ${tasks[i].date}</div>
                    <div class="fs-5" title="${tasks[i].description}">${tasks[i].description.slice(0, 100)}</div>
                </div>
                <div class="my-10px">
                    <span class="bg-blue-500 p-5px px-10px text-white rounded-2">${tasks[i].priority}</span>
                    <span class="bg-gray-500 p-5px px-10px text-white rounded-2">${tasks[i].type}</span>
                </div>
            </div>
            
        </button>`;

            in_progress_tasks.innerHTML += new_button;
            inpgcount++;


        }
        else if (tasks[i].status == 'Done') {


            var new_button = `
            <button class="w-100 d-flex bg-white p-0 py-2 border-0 border-bottom" onclick="updateTask(${i})" data-bs-toggle="modal"
            data-bs-target="#taskBtn1"  >
            <div class="text-green fs-4">
                <i class="fa-regular fa-circle-check ms-10px"></i> 
            </div>
            <div class="ms-10px">
                <div class="fs-3">${tasks[i].title}</div>
                <div class="">
                    <div class="fs-5 text-gray">#${i + 1} created in ${tasks[i].date}</div>
                    <div class="fs-5 "${tasks[i].description}">${tasks[i].description.slice(0, 100)}</div>
                </div>
                <div class="my-10px">
                    <span class="bg-blue-500 p-5px px-10px text-white rounded-2">${tasks[i].priority}</span>
                    <span class="bg-gray-500 p-5px px-10px text-white rounded-2">${tasks[i].type}</span>
                </div>
            </div>
        </button>`;
            done_tasks.innerHTML += new_button;
            donecount++;
        }
    }
    document.getElementById("to-do-tasks-count").innerText = todocount;
    document.getElementById("in-progress-tasks-count").innerText = inpgcount;
    document.getElementById("done-tasks-count").innerText = donecount;   
} 

document.getElementById("body").onload = function () {
    display();

}
function updateTask(i) {
    if (tasks[i].type == "Bug") {
    document.getElementById('bug1').checked = true;
    } else {
    document.getElementById('feature1').checked = true;
    }
    console.log(i);
    title1.value = tasks[i].title
    priority1.value = tasks[i].priority;
    statuse1.value = tasks[i].status;
    date1.value = tasks[i].date;
    description1.value = tasks[i].description;

    document.getElementById("modal-footer1").innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button id="delete" type="button"class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteTask(${i})" >Delete</button>
    <button id="edit" type="submit" class="btn btn-primary" onclick="editTask(${i})" data-bs-dismiss="modal" >Update</button>`

}
function deleteTask(i) {
    tasks.splice(i, 1);
    display();
    clearForm();
} 
function editTask(i) {
    var checkede;
    if (type1.checked) {
        checkede = "Bug";
    }
    else {
        checkede = "Feature";
    }
    tasks[i].title = title1.value
    tasks[i].type = checkede
    tasks[i].priority = priority1.value
    tasks[i].status = statuse1.value
    tasks[i].date = date1.value
    tasks[i].description = description1.value
    clearForm();
    display();

}
function clearForm(){
    document.getElementById("myForm").reset();
    document.getElementById("desc").value="";
}