import { app } from './firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"


const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

//Check if user is logged in:
    //const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dbRefEmail = firebase.firestore().collection("characters").doc(user.email);
            dbRefUid = firebase.firestore().collection("characters").doc(user.uid);
            user = firebase.auth().currentUser;
            //navigate("/user_panel")
            console.log("aaaaaaaaaaaaaa");
        }
        else {
        // User is signed out
        console.log("not logged in");
        }
    });

//Updating read data:
db = firebase.firestore();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        dbRefEmail.onSnapshot(function (doc) {
            if (typeof doc.data() === 'undefined') {
                document.getElementById("create").style.display = "block";
                document.getElementById("reset").style.display = "none";
                document.getElementById("stats").style.display = "none";
            }
            else {
                document.getElementById("create").style.display = "none";
                document.getElementById("reset").style.display = "block";
                document.getElementById("stats").style.display = "block";
                if (doc.data().class == 'None') {
                    document.getElementById("class_choosen").style.display = "none";
                    document.getElementById("class_to_choose").style.display = "block";
                }
                else {
                    document.getElementById("class_choosen").style.display = "block";
                    document.getElementById("class_to_choose").style.display = "none";
                }

                if (doc.data().race == 'None') {
                    document.getElementById("race_choosen").style.display = "none";
                    document.getElementById("race_to_choose").style.display = "block";
                }
                else {
                    document.getElementById("race_choosen").style.display = "block";
                    document.getElementById("race_to_choose").style.display = "none";
                }
                document.getElementById("name").innerHTML = doc.data().name;
                document.getElementById("level").innerHTML = doc.data().level;
                document.getElementById("class").innerHTML = doc.data().class;
                document.getElementById("class1").innerHTML = doc.data().class;
                document.getElementById("race").innerHTML = doc.data().race;
                document.getElementById("race1").innerHTML = doc.data().race;
                document.getElementById("str").innerHTML = doc.data().strenght;
                document.getElementById("int").innerHTML = doc.data().inteligence;
                document.getElementById("wis").innerHTML = doc.data().wisdom;
                document.getElementById("con").innerHTML = doc.data().condition;
                document.getElementById("dex").innerHTML = doc.data().dexterity;
                document.getElementById("char").innerHTML = doc.data().charisma;
                document.getElementById("health_points").innerHTML = doc.data().health_points;
                document.getElementById("defensive_throw").innerHTML = doc.data().defensive_throw;
                document.getElementById("armor_class").innerHTML = doc.data().armor_class;
                document.getElementById("weapon").innerHTML = doc.data().weapon;
                document.getElementById("experience").innerHTML = doc.data().experience;
                document.getElementById("gold").innerHTML = doc.data().gold;
                document.getElementById("str_modifier").innerHTML = doc.data().str_modifier;
                document.getElementById("dex_modifier").innerHTML = doc.data().dex_modifier;
                document.getElementById("atk_modifier").innerHTML = doc.data().atk_modifier;
                document.getElementById("spells").innerHTML = doc.data().spells;
                // Equipment read:
                dbRefUid.onSnapshot(function (snapshot) {
                    let eq_data = snapshot.data();
                    const eq_list = document.querySelector('#eq_list');
                    document.getElementById("eq_list").innerHTML = "";
                    Object.keys(eq_data).forEach(function (key) {
                        let li = document.createElement('li');
                        let span1 = document.createElement('span');
                        var modal = "modal('" + "delete" + "', '" + key + "', '" + eq_data[key] + "')";
                        span1.setAttribute('class', 'text-primary');
                        span1.setAttribute('onclick', modal);
                        span1.setAttribute('data-toggle', 'modal');
                        span1.setAttribute('data-target', '#exampleModalCenter');
                        if (eq_data[key] > 1) {
                            span1.textContent = "-" + key + " x " + eq_data[key];
                        }
                        else {
                            span1.textContent = "-" + key;
                        }
                        li.appendChild(span1);
                        eq_list.appendChild(li);
                    })
                })
            }
        });
    }
});
            
        



//////////////////////////
//Spells list
//Cleric Spells:
const cleric_lvl1 = "-Cure (Cause) Light Wounds<br>-Detect Chaos<br>-Detect Magic<br>-Light (Dark)<br>-Protection from Chaos<br>-Purify (Putrefy) Food and Drink<br>";
const cleric_lvl2 = "-Bless (Curse)<br>-Find Traps<br>-Hold Person<br>-Speak with Animals<br>";
const cleric_lvl3 = "-Cure (Cause) Disease<br>-Light (Dark), Continual<br>-Locate Object<br>-Remove Curse<br>";
const cleric_lvl4 = "-Cure (Cause) Serious Wounds<br>-Neutralize Poison<br>-Protection from Chaos<br>-Speak with Plants<br>-Sticks to Snakes<br>";
const cleric_lvl5 = "-Commune<br>-Create Food and Drink<br>-Dispel Chaos<br>-Insect Plague<br>-Quest<br>-Raise Dead";
//Wizrad spells:
const wizard_lvl1 = "-Charm Person<br>-Detect Magic<br>-Hold Portal<br>-Light<br>-Protection from Chaos<br>-Read Languages<br>-Read Magic<br>-Sleep<br>";
const wizard_lvl2 = "-Detect Chaos<br>-Detect Invisibility<br>-Detect Thoughts<br>-Invisibility<br>-Knock<br>-Levitate<br>-Light, Continual<br>-Locate Object<br>-Phantasmal Force<br>-Web<br>-Wizard Lock<br>";
const wizard_lvl3 = "-Alter Time<br>-Crystal Ball<br>-Darkvision<br>-Dispel Magic<br>-Fireball<br>-Fly<br>-Hold Person<br>-Lightning Bolt<br>-Protection from Normal Missiles<br>-Water Breathing<br>";
const wizard_lvl4 = "-Charm Monster<br>-Confusion<br>-Dimensional Portal<br>-Halucinatory Terrain<br>-Massmorph<br>-Plant Growth<br>-Polymorph<br>-Remove Curse<br>-Wall of Fire or Ice<br>-Wizard Eye<br>";
const wizard_lvl5 = "-Animal Growth<br>-Animate Dead<br>-Cloudkill<br>-Conjure Elemental<br>-Contact Othe Plane<br>-Feeblemind<br>-Hold Monster<br>-Magic Jar<br>-Passwall<br>-Telekinesis<br>-Teleport<br>-Transform Rock-Mud<br>-Wall of Stone or Iron<br>";
const wizard_lvl6 = "-Anti-Magic Shield<br>-Control Weather<br>-Death Spell<br>-Disintegrate<br>-Invisible Stalker<br>-Move Earth<br>-Move Water<br>-Project Image<br>-Quest<br>-Reincarnation<br>-Transform Stone-Flesh<br>";
//////////////////////////
//Advancement list:
//Cleric tables:
const cleric_exp_to_lvl = {
    1: 1500, 2: 3000, 3: 6000, 4: 12000, 5: 24000, 6: 48000, 7: 96000, 8: 192000, 9: 384000,
    reference: function (lvl) { return this[lvl];}};
const cleric_hit_dice = {
    2: 2, 3: 3, 4: 3, 5: 4, 6: 5, 7: 6, 8: 6, 9: 7, 10: 8,
    reference: function (lvl) { return this[lvl+1]; }};
const cleric_saving_throw = -1;
//wizard tables:
const wizard_exp_to_lvl = {
    1: 2500, 2: 5000, 3: 10000, 4: 20000, 5: 40000, 6: 80000, 7: 160000, 8: 320000, 9: 640000,
    reference: function (lvl) { return this[lvl]; }};
const wizard_hit_dice = {
    2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5,
    reference: function (lvl) { return this[lvl+1]; }};
const wizard_saving_throw = -1;
//fighter tables:
const fighter_exp_to_lvl = {
    1: 2000, 2: 4000, 3: 8000, 4: 16000, 5: 32000, 6: 64000, 7: 128000, 8: 256000, 9: 512000,
    reference: function (lvl) { return this[lvl]; }};
const fighter_hit_dice = {
    2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
    reference: function (lvl) { return this[lvl+1]; }};
const fighter_saving_throw = -1;
//////////////////////////
//Updater:
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        dbRefEmail.onSnapshot(function (doc) {
            if (typeof doc.data() != 'undefined') {
                var level = doc.data().level;
                var exp = doc.data().experience;
                var hp = doc.data().health_points;
                var st = doc.data().defensive_throw;
                if (doc.data().class === "Cleric") {
                    if (level == 1) {
                        dbRefEmail.update({
                            spells: cleric_lvl1,
                        });
                        if (exp >= cleric_exp_to_lvl.reference(level)) {
                            let hitdice = cleric_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 2) {
                        dbRefEmail.update({
                            spells: cleric_lvl1 + cleric_lvl2,
                        });
                        if (exp >= cleric_exp_to_lvl.reference(level)) {
                            let hitdice = cleric_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 3) {
                        dbRefEmail.update({
                            spells: cleric_lvl1 + cleric_lvl2 + cleric_lvl3,
                        });
                        if (exp >= cleric_exp_to_lvl.reference(level)) {
                            let hitdice = cleric_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 4) {
                        dbRefEmail.update({
                            spells: cleric_lvl1 + cleric_lvl2 + cleric_lvl3 + cleric_lvl4,
                        });
                        if (exp >= cleric_exp_to_lvl.reference(level)) {
                            let hitdice = cleric_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level >= 5) {
                        dbRefEmail.update({
                            spells: cleric_lvl1 + cleric_lvl2 + cleric_lvl3 + cleric_lvl4 + cleric_lvl5,
                        });
                        if (exp >= cleric_exp_to_lvl.reference(level)) {
                            let hitdice = cleric_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }

                }
                else if (doc.data().class === "Wizard") {
                    if (level == 1) {
                        dbRefEmail.update({
                            spells: wizard_lvl1,
                        });
                        if (exp >= wizard_exp_to_lvl.reference(level)) {
                            let hitdice = wizard_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 2) {
                        dbRefEmail.update({
                            spells: wizard_lvl1 + wizard_lvl2,
                        });
                        if (exp >= wizard_exp_to_lvl.reference(level)) {
                            let hitdice = wizard_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 3) {
                        dbRefEmail.update({
                            spells: wizard_lvl1 + wizard_lvl2 + wizard_lvl3,
                        });
                        if (exp >= wizard_exp_to_lvl.reference(level)) {
                            let hitdice = wizard_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 4) {
                        dbRefEmail.update({
                            spells: wizard_lvl1 + wizard_lvl2 + wizard_lvl3 + wizard_lvl4,
                        });
                        if (exp >= wizard_exp_to_lvl.reference(level)) {
                            let hitdice = wizard_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level == 5) {
                        dbRefEmail.update({
                            spells: wizard_lvl1 + wizard_lvl2 + wizard_lvl3 + wizard_lvl4 + wizard_lvl5,
                        });
                        if (exp >= wizard_exp_to_lvl.reference(level)) {
                            let hitdice = wizard_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }
                    else if (level >= 6) {
                        dbRefEmail.update({
                            spells: wizard_lvl1 + wizard_lvl2 + wizard_lvl3 + wizard_lvl4 + wizard_lvl5 + wizard_lvl6,
                        });
                        if (exp >= wizard_exp_to_lvl.reference(level)) {
                            let hitdice = wizard_hit_dice.reference(level);
                            let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                            Math.floor(Math.random() * 5) + 1;
                            dbRefEmail.update({
                                level: level + 1,
                                health_points: hp + roll,
                                defensive_throw: st - 1,
                            });
                        }
                    }

                }
                else if (doc.data().class === "None" || doc.data().class === "Fighter") {
                    dbRefEmail.update({
                        spells: "No Spells",
                    });
                    if (exp >= fighter_exp_to_lvl.reference(level)) {
                        let hitdice = fighter_hit_dice.reference(level);
                        let roll = (Math.floor(Math.random() * 5) + 1) * hitdice;
                        Math.floor(Math.random() * 5) + 1;
                        dbRefEmail.update({
                            level: level + 1,
                            health_points: hp + roll,
                            defensive_throw: st - 1,
                        });
                    }
                }
            }
        });
    }
});
//////////////////////////

function logout(){
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
        window.alert(errorMessage);
        });
}

function add_character() {
    window.location.href = "add_char.html"; 
}

function reset_character() {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var db = firebase.firestore()
    var name = document.getElementById("name").innerHTML;
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
    dbRefEmail.set({
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
    })
        .then(function () {
            //console.log("Document successfully written!");
            //window.alert("Character successfully created.");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    db.collection("characters").doc(user.uid).set({

    })
        .then(function () {
            //console.log("Document successfully written!");
            //window.alert("Character successfully created.");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function modal(action, name, quantity) {
    let add_item_textfield = document.getElementById('add_item_textfield');
    let modal_Race = document.getElementById('modal_Race');
    let modal_Class = document.getElementById('modal_Class');
    let modal_Dropdown = document.getElementById('modal_Dropdown');
    if (modal_Race.style.display != "none" ||
        modal_Class.style.display != "none" ||
        modal_Dropdown.style.display != "none") {
        modal_Race.style.display = "none";
        modal_Class.style.display = "none";
        modal_Dropdown.style.display = "none";
    }
    if (add_item_textfield) {
        add_item_textfield.remove();
    }
    if (action === "delete") {
        document.getElementById('modal_Title').innerHTML = "Do you want to delete this item: <span class='text-warning'>" + name + "</span> ?";
        let del = "delete_item('" + name + "', '" + quantity + "')";
        document.getElementById('accept_button').setAttribute('onclick', del);
    }
    else if (action === "add_item") {
        document.getElementById('modal_Title').innerHTML = "Item name:";
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'add_item_textfield');
        input.setAttribute('class', 'form-control');
        document.getElementById('modal_Body').appendChild(input);
        let item_text = document.getElementById('add_item_textfield').value;
        let add = "add_item()";
        document.getElementById('accept_button').setAttribute('onclick', add);
    }
    else if (action === "race") {
        document.getElementById('modal_Title').innerHTML = "Choose race:";
        document.getElementById('modal_Race').style.display = "block";
    }
    else if (action === "class") {
        document.getElementById('modal_Title').innerHTML = "Choose class:";
        document.getElementById('modal_Class').style.display = "block";
    }
    else if (action === "reset") {
        document.getElementById('modal_Title').innerHTML = "Reset your character?";
        document.getElementById('accept_button').setAttribute('onclick', 'reset_character()');
    }
    else if (action === "exp") {
        document.getElementById('modal_Title').innerHTML = "Add experience:";
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'add_item_textfield');
        input.setAttribute('class', 'form-control');
        document.getElementById('modal_Body').appendChild(input);
        let item_text = document.getElementById('add_item_textfield').value;
        let add = "add_exp()";
        document.getElementById('accept_button').setAttribute('onclick', add);
    }
    else if (action === "gold") {
        document.getElementById('modal_Title').innerHTML = "Add gold:";
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'add_item_textfield');
        input.setAttribute('class', 'form-control');
        document.getElementById('modal_Body').appendChild(input);
        let item_text = document.getElementById('add_item_textfield').value;
        let add = "add_gold()";
        document.getElementById('accept_button').setAttribute('onclick', add);
    }
    else if (action === "weapon") {
        document.getElementById('modal_Title').innerHTML = "";
        document.getElementById('modal_Dropdown').style.display = "block";
        dbRefUid.onSnapshot(function (snapshot) {
            let eq_data = snapshot.data();
            let eq_list = document.getElementById('modal_Dropdown-menu')
            document.getElementById("modal_Dropdown-menu").innerHTML = "";
            Object.keys(eq_data).forEach(function (key) {
                let a = document.createElement('span');
                a.setAttribute('class', 'dropdown-item');
                let onclick = "choose_weapon('" + key + "')";
                a.setAttribute('onclick', onclick);
                a.setAttribute('data-dismiss','modal');
                a.innerHTML = key;
                eq_list.appendChild(a);
            })
        })
    }
}

function delete_item(name, quantity) {
    if (quantity > 1) {
        dbRefUid.update({
            [name]: firebase.firestore.FieldValue.increment(-1),
        })
    }
    else {
        dbRefUid.update({
            [name]: firebase.firestore.FieldValue.delete(),
        })
    }
}

function add_item() {
    let item_name = document.getElementById('add_item_textfield').value;
    dbRefUid.update({
        [item_name]: firebase.firestore.FieldValue.increment(1),
    })
}

function add_exp() {
    let item_name = document.getElementById('add_item_textfield').value;
    if (isNaN(item_name) == false) {
        dbRefEmail.update({
            experience: firebase.firestore.FieldValue.increment(parseInt(item_name, 10)),
        });
    }
    else {
        window.alert("Value must be a number!");
    }
}

function add_gold() {
    let item_name = document.getElementById('add_item_textfield').value;
    if (isNaN(item_name) == false) {
        dbRefEmail.update({
            gold: firebase.firestore.FieldValue.increment(parseInt(item_name, 10)),
        });
    }
    else {
        window.alert("Value must be a number!");
    }
}

function choose_weapon(weapon) {
    dbRefEmail.update({
        weapon: weapon,
    })
}

function class_fighter() {
    dbRefEmail.get().then(function (doc) {
        var health_points = doc.data().health_points;
        var defensive_throw = doc.data().defensive_throw;
        dbRefEmail.update({
            health_points: health_points + 2,
            defensive_throw: 16,
            class: "Fighter",
            description: "You are awesome at fighting and using muscle and brawn, as a mighty warrior or skilled woodsman or grizzled mercenary. You can use any/all weapon and armor.",
        });
    })
}

function class_cleric() {
    dbRefEmail.get().then(function (doc) {
        var health_points = doc.data().health_points
        var defensive_throw = doc.data().defensive_throw;
        dbRefEmail.update({
            health_points: health_points + 1,
            defensive_throw: 14,
            class: "Cleric",
            description: "You follow a deity or religion, using your faith and  skill  at  arms  to  defeat  your  foes.  You  can  use  any/all armor, and all weapons that do not have an edge or  point  (no  swords,  axes,  arrows,  spears,  etc.)",
        });
    })
}

function class_wizard() {
    dbRefEmail.get().then(function (doc) {
        var health_points = doc.data().health_points
        var defensive_throw = doc.data().defensive_throw;
        dbRefEmail.update({
            health_points: health_points - 1,
            defensive_throw: 15,
            class: "Wizard",
            description: "You   are   skilled   in   the   arcane   and   mysterious  arts  of  magic.    You  have  little  training  in  other areas, so you may not use any armor and you can only  use  daggers,  staffs  and  darts  as  weapons.",
        });
    })
}

function pick_race(i) {
    dbRefEmail.update({
        race: i,
    });
}

