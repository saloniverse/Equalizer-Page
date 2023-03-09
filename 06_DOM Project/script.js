// Task 1

const ineuronLogo = document.querySelector("header img");
ineuronLogo.src = "./assets/ineuron-logo.png"

// Task 2

const parent = document.createElement("div");
parent.className = "footer_social_ico";
const child = document.createElement("i");
child.className = "fa-brands fa-linkedin";
// console.log(parent);console.log(child);
const element = document.querySelector(".footer_social");
element.appendChild(parent).appendChild(child);