let container = null;
let hikingImageNum = -1;

// Find out how many pictures are in the gallery
const filename = '../assets/hiking/locations.txt'; // Replace with your file path
numLines = 0;
fetch(filename)
    .then(response => response.text())
    .then(data => {
        numLines = data.split('\n').length;

        for(let i = numLines; i > 0; i -= 3) {
            addRow(i);
        }
    })
    .catch(error => {
        console.error('Error fetching the file:', error);
    });

function addRow(startNum) {
    // Create layout of page using cloned rows
    const template = document.getElementById("row_template");
    const newRow = template.content.cloneNode(true); // true for deep cloning (including children)
    
    cont = newRow.querySelector("#cont_col1")
    cont.onclick = function () { showHiking(event, 'gallery_template', startNum); };
    cont = newRow.querySelector("#cont_col2")
    cont.onclick = function () { showHiking(event, 'gallery_template', startNum-1); };
    cont = newRow.querySelector("#cont_col3")
    cont.onclick = function () { showHiking(event, 'gallery_template', startNum-2); };

    img = newRow.querySelector("#img_col1")
    img.src = "../assets/hiking/hiking_" + startNum + ".JPEG";
    img = newRow.querySelector("#img_col2")
    img.src = "../assets/hiking/hiking_" + (startNum-1) + ".JPEG";
    img = newRow.querySelector("#img_col3")
    img.src = "../assets/hiking/hiking_" + (startNum-2) + ".JPEG";
    
    const targetTableBody = document.querySelector('#rowHolder');
    targetTableBody.appendChild(newRow);
}

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



// Example usage:
function setLocation(lineNumber) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            if (lineNumber > 0 && lineNumber <= lines.length) {
                document.getElementById("caption_location").innerText = lines[numLines - lineNumber];
            } 
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
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
    img = document.getElementById("hiking_img");
    img.src = "../assets/hiking/hiking_" + String(hikingImageNum) + ".JPEG";

    // Update the location and date based on the picture
    setLocation(hikingImageNum);

    img.onload = function() {
        delete img.exifdata;
        EXIF.getData(img, function() {
            dateTaken = EXIF.getTag(this, 'DateTimeOriginal'); // Or 'CreateDate'

            if (dateTaken) {
                dateTaken = dateTaken.split(" ")[0];
                const formattedDateString = dateTaken.replace(/:/g, '-')
                const dateObject = new Date(formattedDateString);   
                const options = { month: 'long', year: 'numeric'};
                
                document.getElementById("caption_date").innerText = dateObject.toLocaleDateString(undefined, options); 
            }
        });
    };

    document.addEventListener('click', checkInsideBox);
    document.addEventListener('keydown', handleKey);
} 

function handleKey(e) {
    if (e.key === "ArrowLeft") { // escape key maps to keycode `27`
        advanceHikingImage(1);
    }
    if (e.key === "ArrowRight") { // escape key maps to keycode `27`
        advanceHikingImage(-1);
    }
}

function advanceHikingImage(inc) {
    hikingImageNum += inc;
    if(hikingImageNum < 1) {
        hikingImageNum = numLines; // Max image number (change to number of files in folder)
    }
    if(hikingImageNum > numLines) { // Max image number (change to number of files in folder)
        hikingImageNum = 1; 
    }
    document.getElementById("hiking_img").src = "../assets/hiking/hiking_" + String(hikingImageNum) + ".JPEG";
    setLocation(hikingImageNum);
} 