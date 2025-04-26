const limit = 200;
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

const warningMessage = document.getElementById('warningMessage');

function updateCharCounter() {
    const charCountValue = textInput.value.length;

    // Split the input into words (split by spaces and remove extra spaces)
    const words = textInput.value.trim().split(/\s+/).filter(Boolean);

    // Count total words
    const wordCountValue = words.length;

    // Normalize words by converting them to lowercase and removing punctuation
    const cleanedWords = words.map(word => word.toLowerCase().replace(/[^\w]/g, ''));

    // Create a set of unique words
    const uniqueWordsSet = new Set(cleanedWords);

    // Update character count
    charCount.innerText = `${charCountValue}/${limit} Characters`;

    // Update word count
    wordCount.innerText = `Total Word Count: ${wordCountValue}`;


    // Clear warning message
    warningMessage.innerText = '';

    // Handle character limit styles
    if (charCountValue <= limit) {
        charCount.style.color = 'green';
    } else if (charCountValue === limit) {
        charCount.style.color = 'orange';
    } else {
        charCount.style.color = 'red';
        warningMessage.innerText = 'Character Limit Exceeded';
    }
}

textInput.addEventListener('input', updateCharCounter);
