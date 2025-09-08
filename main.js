let container = null;
let hikingImageNum = -1;

function showTex(e, parameter) {
    e.stopPropagation()

    // Get the template element
    const template = document.getElementById(parameter);

    // Clone the content of the template
    texTemplate = template.content.cloneNode(true);
    container = document.getElementById('texHolder');

    // Append the cloned content to the DOM
    container.appendChild(texTemplate);

    container.children[0].id = "texBox";

    // document.getElementById("texCode").textContent = parameter;

    document.addEventListener('click', checkInsideBox);
} 

function removeTex() {
    // Check if the element exists before attempting to remove it
    element = document.getElementById("texBox");

    if (element) {
        // Remove the element from the DOM
        element.remove();
    }

    document.removeEventListener('click', checkInsideBox);
    document.addEventListener('keydown', handleKey);
}

$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        removeTex();
    }
});


function checkInsideBox(event) {
    boxElement = document.getElementById("texBoxClick");

    if (!boxElement.contains(event.target)) {
        removeTex();
    } 
}

async function copyText() {
    textElement = document.getElementById("texCode");
    buttonElement = document.getElementById("copyButtonText");

    await navigator.clipboard.writeText(textElement.textContent);

    buttonElement.textContent = "Copied";
}

function showHiking(e, parameter, num) {
    e.stopPropagation()

    // Get the template element
    const template = document.getElementById(parameter);

    // Clone the content of the template
    texTemplate = template.content.cloneNode(true);
    container = document.getElementById('texHolder');

    // Append the cloned content to the DOM
    container.appendChild(texTemplate);

    container.children[0].id = "texBox";

    hikingImageNum = num;
    console.log(hikingImageNum);
    document.getElementById("hiking_img").src = "../assets/hiking/hiking_" + String(hikingImageNum) + ".JPEG";

    document.addEventListener('click', checkInsideBox);
    document.addEventListener('keydown', handleKey);
} 

function handleKey(e) {
    if (e.key === "ArrowLeft") { // escape key maps to keycode `27`
        advanceHikingImage(-1);
    }
    if (e.key === "ArrowRight") { // escape key maps to keycode `27`
        advanceHikingImage(1);
    }
}

function advanceHikingImage(inc) {
    hikingImageNum += inc;
    if(hikingImageNum < 1) {
        hikingImageNum = 227; // Max image number (change to number of files in folder)
    }
    console.log(hikingImageNum);
    document.getElementById("hiking_img").src = "../assets/hiking/hiking_" + String(hikingImageNum) + ".JPEG";
} 