let container = null;

function showTex(parameter) {
    // Get the template element
    const template = document.getElementById(parameter);

    // Clone the content of the template
    texTemplate = template.content.cloneNode(true);
    container = document.getElementById('texHolder');

    // Append the cloned content to the DOM
    container.appendChild(texTemplate);

    container.children[0].id = "texBox";

    // document.getElementById("texCode").textContent = parameter;
} 

function removeTex() {
    // Check if the element exists before attempting to remove it
    element = document.getElementById("texBox");

    if (element) {
        // Remove the element from the DOM
        element.remove();
    }
}

$(document).keyup(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
        removeTex();
    }
});