let add_task = document.getElementById("add_task");
let add_btn = document.getElementById("add_btn");
let task_list = document.getElementById("task_list");

let tasks = [];
let edit_index = -1;

function render_tasks() {

    task_list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        task_list.innerHTML += `
            <tr id="task_row_${i}" class="border-b border-gray-200">

                <td class="px-6 py-4 text-center">
                    <input onclick="toggle_task(${i})" type="checkbox" class="w-4 h-4 hover:cursor-pointer">
                </td>

                <td class="px-6 py-4">
                    ${tasks[i]}
                </td>

                <td class="px-6 py-4 flex gap-[20px] justify-center">

                    <button onclick="edit_task(${i})" type="button" class="text-center inline-flex items-center text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br hover:cursor-pointer shadow-lg shadow-green-500/20 font-medium rounded-[10px] text-sm px-6 py-2 text-center leading-5">
                        <svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"/>
                        </svg>
                        Edit
                    </button>

                    <button onclick="delete_task(${i})" type="button" class="text-center inline-flex items-center justify-center text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br hover:cursor-pointer shadow-lg shadow-red-500/20 font-medium rounded-[10px] text-sm px-6 py-2 text-center leading-5">
                        <svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.5,10H33V6c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v4H6.5C5.7,10,5,10.7,5,11.5v3C5,15.3,5.7,16,6.5,16h39c0.8,0,1.5-0.7,1.5-1.5v-3C47,10.7,46.3,10,45.5,10z M23,7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3h-6V7z"/>
                            <path d="M41.5,20h-31C9.7,20,9,20.7,9,21.5V45c0,2.8,2.2,5,5,5h24c2.8,0,5-2.2,5-5V21.5C43,20.7,42.3,20,41.5,20z M23,42c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z M33,42c0,0.6-0.4,1-1,1h-2c0-1-.4-1-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z"/>
                         </svg>
                        Delete
                    </button>


                </td>

            </tr>
        `;
    }
}

add_btn.addEventListener("click", function () {

    if (add_task.value != "") {

        if (edit_index == -1) {

            tasks.push(add_task.value);

        } else {

            tasks[edit_index] = add_task.value;

            edit_index = -1;

            reset_add_button();

            add_task.placeholder = "Add a new task...";
        }

        render_tasks();

        add_task.value = "";
    }

});

add_task.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        if (add_task.value != "") {

            if (edit_index == -1) {

                tasks.push(add_task.value);

            } else {

                tasks[edit_index] = add_task.value;
                edit_index = -1;
                reset_add_button();
            }

            render_tasks();

            add_task.value = "";
        }
    }

});


function edit_task(i) {

    add_task.value = tasks[i];

    edit_index = i;

    add_btn.className = `
        inline-flex items-center justify-center
        text-white
        bg-gradient-to-r from-lime-500 via-green-500 to-emerald-600
        hover:bg-gradient-to-br
        hover:cursor-pointer
        shadow-lg shadow-green-500/20
        font-medium
        rounded-[10px]
        text-sm
        px-6 py-2
        text-center
        leading-5
    `;

    add_btn.innerHTML = `
        <svg fill="currentColor" class="w-4 h-4 me-2" viewBox="0 0 24 24">
            <path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"/>
        </svg>
        <span>Update</span>
    `;
}

function delete_task(i) {

    tasks.splice(i, 1);

    render_tasks();
}


function toggle_task(i) {

    let row = document.getElementById(`task_row_${i}`);

    if (event.target.checked) {

        row.classList.add("bg-green-100");

    } else {

        row.classList.remove("bg-green-100");

    }

}

function reset_add_button() {

    add_btn.className = `
        inline-flex items-center
        text-white
        bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
        hover:bg-gradient-to-br
        hover:cursor-pointer
        shadow-lg shadow-blue-500/20
        dark:shadow-lg
        font-medium
        rounded-[10px]
        text-sm
        px-6 py-2
        text-center
        leading-5
    `;

    add_btn.innerHTML = `
        <svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M856 40H142q-42 0-72 30t-30 72v714q0 42 30 72t72 30h714q42 0 72-30t30-72V142q0-42-30-72t-72-30zM754 550H550v204H448V550H244V448h204V244h102v204h204v102z"/>
        </svg>
        <span>Add</span>
    `;

    add_task.placeholder = "Add a new task...";
}