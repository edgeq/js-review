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