// DEFINE UIs
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const task = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

function loadEventListeners() {
    // Add task 
    form.addEventListener('submit', addTask);
    // delete item - multiple of the same and dynamic elements need delegation
    taskList.addEventListener('click', removeTask);
    // clear all tasks 
    clearBtn.addEventListener('click', clearTasks);
    // filter for tasks
    filter.addEventListener('keyup', filterTasks);

}

// addTask Function
function addTask(e) {
    e.preventDefault();
    if (task.value === '') {
        alert('Add a task');
        return;
    }
    //create element, classname, and task value
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task.value));

    //create a link with materialize classNames
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'
        // add icon to link
    const icon = document.createElement('i');
    icon.className = 'fa fa-trash';
    link.appendChild(icon);
    /**
     * Traversy method
     *  link.innerHTML = '<i class="fa fa-remove></i>" 
     */

    // append link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    //clear the input
    task.value = '';

    console.log(li);
}

//removeTask Function
function removeTask(e) {
    let liAction = e.target.parentElement;
    if (liAction.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {

            liAction.parentElement.remove();

        }
    }
}

//clearTasks function
function clearTasks() {
    if (confirm('Delete all tasks?')) {
        while (taskList.firstChild) {
            taskList.firstChild.remove();
        }

    }
}

// filter function
function filterTasks(e) {
    // console.log(`${e.target.value}`)
    const text = e.target.value.toLowerCase();
    // get the NodeList of all .collection-items
    // loop through NodeList
    document.querySelectorAll('.collection-item').forEach(function(taskItem) {
        // get the items first child's textContent
        const item = taskItem.firstChild.textContent;
        //check to see if there's a match anywhere in the word
        if (item.toLowerCase().indexOf(text) != -1) {
            //if so, style the element as a block
            taskItem.style.display = 'block';
        } else {
            //otherwise hide the element
            taskItem.style.display = 'none';
        }
    })

}