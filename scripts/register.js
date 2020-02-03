firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "index.html";
    } else {
        
    }
});

function register() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var userRepeatPass = document.getElementById("repeat_password_field").value;
    if (userPass == userRepeatPass) {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    else {
        window.alert("Paswords must be the same.");
    }
}

function back() {
    window.location.href = "index.html";
}
