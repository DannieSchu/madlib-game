// Adjective 1
    //get input element that contains user input
    const inputAdjective1 = document.getElementById("input-adjective-1");

    //get place where we want to put new adjective
    const adjective1 = document.getElementById("adjective-1");

// Verb 1
    const inputVerb1 = document.getElementById("input-verb-1");

    const verb1 = document.getElementById("verb-1");

// Get button
const button = document.getElementById("get-button");

// When user enters value, the output adjective should equal the input
const changeValue = () => {
    adjective1.textContent = inputAdjective1.value;

    verb1.textContent = inputVerb1.value;
};

// When user clicks button, the changeValue function will run
button.addEventListener('click', changeValue);