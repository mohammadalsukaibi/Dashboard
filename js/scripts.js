// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTable').DataTable();
}); 
document.getElementById("sidebarToggle").addEventListener("click", myFunction);

function myFunction(){
    console.log("hello");
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#wrapper');

    sidebarToggle.classList.toggle("toggled")
}