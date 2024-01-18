//fill in the missing code in the ???

let a = ["One", "Two", "Three", "Four", "Five"];
for (let i = 0; i < a.length; ++i) {
  //create a new element using javascript
  let newDiv = document.createElement("div");
  //add class to element through javascript
  newDiv.classList.add("mystyle")
  // and give it some content
  let newContent = document.createTextNode("" + a[i]);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //add the div to the body of the html
  document.body.appendChild(newDiv);
}