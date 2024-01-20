// Create a new element and store it inside a variable
const myParagraph = document.createElement("p");
// To add a textContent in an HTML element use textContent
myParagraph.textContent = "I am a new paragaph";

//1. add a class "special" to the paragraph
myParagraph.classList.add("special");

//2. add an id of "first" to the paragraph (hint: setAttribute)
myParagraph.setAttribute("id", "first");

//3. append the paragraph to the body
document.querySelector("#display").innerText = "I am a Paragraph";
htmlBodyElement.appendChild(myParagraph);

/* 
    let's add an image to make it beautiful

    */
const myImage = document.createElement("img");
myImage.src = "http://placekitten.com/200/300";
myImage.alt = "Nice image";

htmlBody.appendChild(myImage);

/* 
    It's possible to create nested elements
*/

function addElement() {
  const newDiv1 = document.createElement("div");
  newDiv1.classList.add("wrapper");

  const newDiv2 = document.createElement("div");
  newDiv2.classList.add("2nd-wrapper");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "I am a Paragraph inside a div";

  htmlBody.appendChild(newDiv1);
  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(newParagraph);
}

// call the function
addElement();
