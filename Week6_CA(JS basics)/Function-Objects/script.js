//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender) {
  this.name = name;
  this.specialty = specialty;
  this.power = power;
  this.hitpoints = hitpoints;
  this.level = level;
  this.gender = gender;
  this.maxPower = function() {
    return power * level - hitpoints;
  };
  this.singerProfile = function() {
    return `Name: ${name} Level: ${level}, Gender: ${gender}, specialty ${specialty}, Power ${power}, Hitpoints: ${hitpoints}`;
  };
}

//Create the function objects momobae and minabae.
let momobae = new Singer('Momobae', 'K-pop', 49, 28, 7, 'Female');
let minabae = new Singer('Minabae', 'K-pop', 49, 28, 7, 'Female');

//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" + momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" + minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);
