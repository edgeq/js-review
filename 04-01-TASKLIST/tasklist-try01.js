// DEFINE UIs
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const input = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

function loadEventListeners() {
    // Add task 
    form.addEventListener('submit', addTask);
}

// addTask Function -> self-attempt
function addTask(e) {
    e.preventDefault();
    if (input.value == '') {
        alert('Please, enter a task')
        return;
    }
    const task = input.value;
    console.log(task);

    let tasks;
    //pass event to local storage
    if (localStorage.getItem('tasks') == undefined) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    // PRINT LOCAL STORAGE LIST TO UI
    printList(tasks);

}

function printList(tasks) {
    if (localStorage.getItem('tasks') == 'undefined') {
        console.log('undefined');
    } else {

        tasks.forEach(task => {
            // make an li
            const li = document.createElement('li');
            //add class to li
            li.className = ('.collection-item');
            // input tasl into li
            li.appendChild(document.createTextNode(task));
            taskList.appendChild(tasks);
        });
    }
}

console.log(form, taskList, clearBtn, filter, input);