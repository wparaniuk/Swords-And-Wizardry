firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

       // var user = firebase.auth().currentUser;
        
    } else {
        window.location.href = "index.html";
    }
});

function add_character() {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var db = firebase.firestore()
    var name = document.getElementById("name_field").value;
    var char = Math.floor(Math.random() * 15) + 3;
    var con = Math.floor(Math.random() * 15) + 3;
    var dex = Math.floor(Math.random() * 15) + 3;
    var int = Math.floor(Math.random() * 15) + 3;
    var str = Math.floor(Math.random() * 15) + 3;
    var wis = Math.floor(Math.random() * 15) + 3;
    var char = Math.floor(Math.random() * 15) + 3;
    var gold = (Math.floor(Math.random() * 15) + 3) * 10;
    var hp = Math.floor(Math.random() * 5) + 1;
    var ac = 10;
    var dex_modifier = "0"; var str_modifier = "0"; var atk_modifier = "0";
    if (con <= 8) { // condition modifier
        hp = hp - 1;
    } else if (con >= 13) {
        hp = hp + 1;
    }
    if (dex <= 8) { // dexterity modifier
        ac = ac - 1;
        dex_modifier = "-1";
    } else if (dex >= 13) {
        ac = ac + 1;
        dex_modifier = "+1";
    }
    if (str <= 8) { // strenght modifier
        ac = ac - 1;
        str_modifier = "-1";
        atk_modifier = "-1";
    } else if (str >= 13) {
        ac = ac + 1;
        str_modifier = "+1";
        atk_modifier = "+1";
    }
    db.collection("characters").doc(email).set({
        name: name,
        armor_class: ac,
        class: "None",
        defensive_throw: 0,
        condition: con,
        dexterity: dex,
        dex_modifier: dex_modifier,
        str_modifier: str_modifier,
        atk_modifier: atk_modifier,
        inteligence: int,
        charisma: char,
        strenght: str,
        wisdom: wis,
        experience: 0,
        gold: gold,
        health_points: hp,
        level: 1,
        race: "None",
        weapon: "None",
        uid: user.uid,
    })
    db.collection("characters").doc(user.uid).set({  
    })
        .then(function () {
            //console.log("Document successfully written!");
            //window.alert("Character successfully created.");
            window.location.href = "user_panel.html";
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function back() {
    window.location.href = "user_panel.html";
}

