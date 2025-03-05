var name = "Mark";

class TTRPG_Character {
  constructor(name, health, type) {
    this.name = name;
    this.health = health;
    this.type = type;
  }

  //Test without this
  sayName() {
    console.log("Hello, I am " + this.name + " and I am a " + this.type);
  }

  sayHealth() {
    console.log(
      "I am " + this.name + " and I am currently at " + this.health + "HP!"
    );
  }
}

var character1 = new TTRPG_Character("Kelsier", 100, "Rogue");
var character2 = new TTRPG_Character("Kvothe", 50, "Ranger");
var character3 = new TTRPG_Character("Harry Potter", 75, "Wizard");

character1.sayName();
character2.sayHealth();

var party = [character1, character2, character3];

function changeTypeOfCharacter(character) {
  character.type = "Fighter";
  return character;
}

var partyFighters = party.map(changeTypeOfCharacter);

// Session Zero: Characters Introduce Themselves
party.forEach((character) => {
  character.sayName();
});

var example = {
  name: "Mark",
};

example.name; // Mark

function getISSData() {
  var latitude = 0;
  var longitude = 0;

  console.log("Running");

  // X: Maps
  // X JSON Example Part 2.
  // X Update Page in Response to JSON
  // X CRUD Function Discussions and Purpose
  // X Discuss Routes
  // Discuss Jobs that Use Tech

  fetch("https://openlibrary.org/search.json?q=mistborn")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
;
      console.log(data.docs[0]);

      var year = data.docs[0].first_publish_year;

      if (year > 2000) {
        document.getElementById("latitude").style.backgroundColor = "blue";
        document.getElementById("latitude").style.color="white";
      } else {
        document.getElementById("latitude").style.backgroundColor = "red";
      }

      document.getElementById("latitude").innerText = data.docs[0].title;
    });
}