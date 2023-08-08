const check = await fetch(window.location.origin + "/file.html");
const html = await check.text();

document.documentElement.innerHTML = html;
// Create a new link element for the CSS stylesheet
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
cssLink.href = "/dev/main.css"; // Replace with the actual path to your CSS file

// Get the head element
const headElement = document.querySelector("head");

// Append the link element to the head
headElement.appendChild(cssLink);

await import("./remove-elements.js");
