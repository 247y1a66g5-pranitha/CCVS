const complaintTableBody = document.getElementById("complaintTableBody");

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

displayComplaints();

function displayComplaints(){

    complaintTableBody.innerHTML = "";

    complaints.forEach((complaint,index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

        <td>${complaint.id}</td>

        <td>${complaint.title}</td>

        <td>${complaint.department}</td>

        <td>${complaint.status}</td>

        <td>

            <button onclick="updateStatus(${index})">
            Update
            </button>

            <button onclick="deleteComplaint(${index})">
            Delete
            </button>

        </td>

        `;

        complaintTableBody.appendChild(row);

    });

}

function updateStatus(index){

    const status = prompt(
        "Enter Status:\nPending / In Progress / Completed"
    );

    if(status){

        complaints[index].status = status;

        localStorage.setItem(
            "complaints",
            JSON.stringify(complaints)
        );

        displayComplaints();

    }

}

function deleteComplaint(index){

    complaints.splice(index,1);

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

    displayComplaints();

}