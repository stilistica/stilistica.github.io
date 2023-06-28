let img = document.querySelector("img");

img.onclick = function () {
	let src = img.getAttribute("src");
	if (src === "../images/bratz.jpg") {
		img.setAttribute("src", "../images/bratz-two.jpg");
	} else {
		img.setAttribute("src", "../images/bratz.jpg");
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
	myHeading.textContent = "Welcome to BRATZ, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to BRATZ, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};