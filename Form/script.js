let developer_form = document.getElementById("developer_form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let role = document.getElementById("role");
let experience = document.getElementById("experience");
let profile_list = document.getElementById("profile_list");
let submit_btn = document.getElementById("submit_btn");

let profiles = [];
let edit_index = -1;

function render_profile() {

    profile_list.innerHTML = "";

    for (let i = 0; i < profiles.length; i++) {

        profile_list.innerHTML += `
            <tr class="border-b border-gray-200">

                <td class="px-6 py-4 text-center">
                    <p class="text-center">${profiles[i].name}</p>
                </td>

                <td class="px-6 py-4">
                    <p class="text-center">${profiles[i].email}</p>
                </td>

                <td class="px-6 py-4">
                    <p class="text-center">${profiles[i].role}</p>
                </td>

                <td class="px-6 py-4">
                    <p class="text-center">${profiles[i].experience} Years</p>
                </td>

                <td class="px-6 py-4 flex gap-[20px] justify-center">

                    <button onclick="edit_profile(${i})" type="button" class="inline-flex items-center text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br hover:cursor-pointer shadow-lg shadow-green-500/20 font-medium rounded-[10px] text-sm px-6 py-2 text-center leading-5">
                        <svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"/>
                        </svg>
                        Edit
                    </button>

                    <button onclick="delete_profile(${i})" type="button" class="inline-flex items-center justify-center text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br hover:cursor-pointer shadow-lg shadow-red-500/20 font-medium rounded-[10px] text-sm px-6 py-2 text-center leading-5">
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

function submitbtn(i) {

    i.preventDefault();

    if (name.value != "" && email.value != "" && role.value != "" && experience.value != "") {
        if (edit_index == -1) {

            let profile = {
                name: name.value.toLowerCase(),
                email: email.value,
                role: role.value,
                experience: experience.value
            }

            profiles.push(profile);

        }
        else {
            profiles[edit_index].name = name.value;
            profiles[edit_index].email = email.value;
            profiles[edit_index].role = role.value;
            profiles[edit_index].experience = experience.value;

            edit_index = -1;

            submit_btn.innerText = "Add Profile";

            developer_form.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        render_profile();

        profile_list.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        name.value = "";
        email.value = "";
        role.value = "";
        experience.value = "";
    }
}

function edit_profile(i) {

    name.value = profiles[i].name;
    email.value = profiles[i].email;
    role.value = profiles[i].role;
    experience.value = profiles[i].experience;

    edit_index = i;

    submit_btn.innerText = "Update";

    developer_form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}

function delete_profile(i) {

    profiles.splice(i, 1);
    render_profile();

}

developer_form.addEventListener("submit", submitbtn);