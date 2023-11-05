document.getElementById("form-register").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (email == "" || password == "") {
        console.log("Register Successfuly!")
    } else {
        console.log("Register Failed!")
    }

    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
})