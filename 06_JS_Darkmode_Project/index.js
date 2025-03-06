// Toggle functionality

function changeBackground(color) {
    document.body.style.backgroundColor = color;
    const textColor = color === 'black' ? 'white' : 'black'; // Set text color based on background
    // document.body.style.color = textColor; // Change body text color
    const heading = document.getElementById('colorChange');
    heading.style.color = textColor; // Change heading text color
}

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;

    if (!currentColor || currentColor === 'white') {
        changeBackground('black');
        themeButton.innerText = 'Light Mode';
    } else {
        changeBackground('white');
        themeButton.innerText = 'Dark Mode';
    }
});

