function validateForm() {
    // let validate = document.forms["login"];
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username==="john" && password==="1234"){
        window.location.pathname = "device_manager/html/dashboard.html";
    } else{
        alert("Account incorrect");
        
    }
}
