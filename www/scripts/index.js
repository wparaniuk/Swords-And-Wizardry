firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "user_panel.html"; 
    var user = firebase.auth().currentUser;
    }
    else {
    }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        var errorMessage = error.message;
        window.alert(errorMessage);
    });

}

function register() {
    window.location.href = "register.html"; 
}
