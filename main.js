console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.innerText = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = (document.getElementsByClassName("node2")[0].innerText =
  'I used the getElementByClassName("node2") method to access this');

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");
for (let h3 of h3s) {
  h3.textContent =
    'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement("p");
let pNode = document.createTextNode(
  "This node was created using the createElement() method"
);

p.appendChild(pNode);

// TODO: Append the created node to the parent node using the element.appendChild() method
document.getElementById("parent").appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let a = document.createElement("a");
let aText = document.createTextNode("I am a <a> tag");
a.appendChild(aText);
a.title = "I am a <a> tag";

// BONUS: Add a link href to the <a>
a.href = "https://example.com";
document.body.appendChild(a);

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
let target = document.querySelector("#parent");

target.insertBefore(a, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let n1P = document.getElementById("N1");
let newP = document.createElement("p");
newP.textContent = "New Child Node";
let parent = document.querySelector("#exercise-container3");
parent.replaceChild(newP, n1P);

// TODO: Remove the "New Child Node"
parent.removeChild(newP);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element

let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.textContent = list[i];
  // TODO: Append the new list items to the unordered list element
  ul.appendChild(li);
}

// TODO: Append the unordered list to the `div#container` under exercise 4
let container = document.querySelector("#container");
container.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
  alert("Hello world!");
}

let btn = document.querySelector("#btn");
btn.onclick = show;
