const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complementaryContainer = document.getElementById("complementaryContainer");
const saveColorButton = document.getElementById("saveColorButton");
const favoritesContainer = document.getElementById("favoritesContainer");

colorInput.addEventListener("input", () => {
    const selectedColor = colorInput.value;
    updateColorDisplay(selectedColor);
    showComplementoryColor(selectedColor);
});

function updateColorDisplay(color) {
    colorCode.textContent = color;
    colorCode.style.color = color;
}

function showComplementoryColor(color) {
    const complementoryColors = getComplementorColor(color);
    complementaryContainer.innerHTML = ""; // Clear previous colors

    complementoryColors.forEach((compColor) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = compColor;

        // Add event listener to update the main color picker
        colorBox.addEventListener("click", () => {
            colorInput.value = compColor; // Update the color input value
            updateColorDisplay(compColor); // Update color display
            showComplementoryColor(compColor); // Update complementary colors
        });

        complementaryContainer.appendChild(colorBox);
    });
}

function getComplementorColor(color) {
    const base = parseInt(color.slice(1), 16);
    const compliment = (0xFFFFFF ^ base).toString(16).padStart(6, "0");
    return [`#${compliment}`];
}

copyButton.addEventListener("click", () => {
    navigator.clipboard
        .writeText(colorCode.textContent)
        .then(() => alert("Color code copied!"))
        .catch((err) => console.log("Failed to copy", err));
});

saveColorButton.addEventListener("click", () => {
    const color = colorCode.textContent;
    addFavouriteColor(color);
});

function addFavouriteColor(color) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;
    colorBox.title = color;

    favoritesContainer.appendChild(colorBox);
}
