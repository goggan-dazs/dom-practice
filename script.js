let divContainer = document.getElementById("container");

let bodyContainer = document.getElementById("body");

let elementH1 = document.createElement("h1");
elementH1.innerText = "Ebony & Ivory."
elementH1.style.textAlign = "center";
divContainer.appendChild(elementH1);

let elementH2 = document.createElement("h2");

elementH2.textContent = "This is my H2."



let button1 = document.createElement("button");
button1.textContent = "Light Side";

divContainer.appendChild(button1)

button1.addEventListener("click", () => {
    alert("Welcome to the light side")
    let returnButton = document.createElement("button");
    returnButton.textContent = "Return";
    button1.appendChild(returnButton)
})

let button2 = document.createElement("button");
button2.textContent = "Dark Side";
divContainer.appendChild(button2)
button2.addEventListener("click", () => {
    alert("Welcome to the dark side")
    bodyContainer.style.backgroundColor = "black";
    elementH1.style.color = "white";
    divContainer.appendChild(elementH2);
})




// let elementUl = document.createElement("ul")

// let node = document.createElement("Li");

// let textnode = "List Item 1"
// document.getElementById("ul").appendChild(node);

// let node = document.createElement("Li");
// document.getElementById("ul").appendChild(node);

// let node = document.createElement("Li");
// document.getElementById("ul").appendChild(node);

// document

