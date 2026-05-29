const complaintForm = document.getElementById("complaintForm");

complaintForm.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;

    const department = document.getElementById("department").value;

    const description = document.getElementById("description").value;

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    const complaint = {

        id: Date.now(),

        title,

        department,

        description,

        status: "Pending"
    };

    complaints.push(complaint);

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

    alert("Complaint Submitted Successfully");

    complaintForm.reset();

});