/**
 * Write your challenge solution here
 */

const taskItem = document.getElementsByClassName('task-item');
const taskText = document.getElementsByClassName('task-text');
const taskList = document.getElementById('taskList')
const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')
const emptyTag = document.getElementById('emptyTag')
const totalTasks = document.getElementById('totalTasks')
const completedTasks = document.getElementById('completedTasks')

let totalTasksCount = [];
let completedTask = [];

function addTasks() {
    if (!taskInput.value == "") {
        //remove tagLine
        emptyTag.classList.add('none');
        // Create task
        const task = document.createElement('li');
        // append check box and delete button
        const checkedButton = document.createElement('input')
        checkedButton.type = "checkbox";
        checkedButton.classList.add('complete-checkbox')
        task.appendChild(checkedButton);

        const span = document.createElement('span');
        task.append(span)
        span.innerHTML = taskInput.value.trim()
        span.classList.add('task-text')
        task.classList.add('task-item')
        // show task
        taskList.appendChild(task)

        // delete Button functionality
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete"
        deleteButton.classList.add('delete-button')
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(task)
            totalTasksCount.splice(-1)
            completedTask.splice(-1)
            completedTasks.innerHTML = `Completed: ${completedTask.length}`
            totalTasks.innerHTML = `Total tasks: ${totalTasksCount.length}`

            if (totalTasksCount.length == 0) {
                emptyTag.classList.remove('none');
            }
        })
        task.append(deleteButton)

        totalTasksCount.push(span.innerHTML)
        // update totalTasks 
        totalTasks.innerHTML = `Total tasks: ${totalTasksCount.length}`
        // console.log(totalTasksCount);

        //Edit Button functionality
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add('edit-button');
        editButton.addEventListener("click", () => {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = span.innerHTML;
            span.replaceWith(editInput);
            editButton.innerHTML = "Save";

            editButton.onclick = () => {
                if (editInput.value.trim() !== "") {
                    span.innerHTML = editInput.value.trim();
                    editInput.replaceWith(span);
                    editButton.innerHTML = "Edit";

                    const index = totalTasksCount.indexOf(span.innerHTML);
                    totalTasksCount[index] = span.innerHTML;

                    if (checkedButton.checked && !completedTask.includes(span.innerHTML)) {
                        completedTask.push(span.innerHTML);
                    }
                } else {
                    alert("Task cannot be empty!");
                }
            };
        });
        task.append(editButton);


        // linethrough each tasks when checked and update completed tasks
        checkedButton.addEventListener("change", () => {
            if (checkedButton.checked) {
                span.classList.add('done')
                completedTask.push(span.innerHTML)
                completedTasks.innerHTML = `Completed: ${completedTask.length}`
            }
            else {
                completedTask.pop('(span.innerHTML)')
                completedTasks.innerHTML = `Completed: ${completedTask.length}`
                span.classList.remove('done')
            }
        })
        taskInput.value = ""
    }
    else {
        // Validations 
        alert("Please enter a task first !")
    }
}
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTasks();
    }
});

addButton.addEventListener('click', () => {
    addTasks()
})
