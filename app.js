
// Noun
const inputNoun1 = document.getElementById("input-noun");
const inputNoun2 = document.getElementById("input-noun");
const inputNoun3 = document.getElementById("input-noun");
const inputNoun4 = document.getElementById("input-noun");

// const noun = document.getElementById("noun");

const noun1 = document.getElementById("noun-1");
const noun2 = document.getElementById("noun-2");
const noun3 = document.getElementById("noun-3");
const noun4 = document.getElementById("noun-4");


// Adjective 1
//get input element that contains user input
const inputAdjective1 = document.getElementById("input-adjective-1");

//get place where we want to put new adjective
const adjective1 = document.getElementById("adjective-1");

// Royalty
const inputRoyalty = document.getElementById("input-royalty");

const royalty = document.getElementById("royalty");

// Verb 1
const inputVerb1 = document.getElementById("input-verb-1");

const verb1 = document.getElementById("verb-1");

// Body part
const inputBodyPart = document.getElementById("input-body-part");

const bodyPart = document.getElementById("body-part");

// Preposition
const inputPreposition = document.getElementById("input-preposition");

const preposition = document.getElementById("preposition");

// Adjective 2
const inputAdjective2 = document.getElementById("input-adjective-2");

const adjective2 = document.getElementById("adjective-2");

// Verb 2
const inputVerb2 = document.getElementById("input-verb-2");

const verb2 = document.getElementById("verb-2");

// Adjective 3
const inputAdjective3 = document.getElementById("input-adjective-3");

const adjective3 = document.getElementById("adjective-3");


// Story box
// const storyBox = document.getElementById("story-box");
// storyBox.style.display = "hidden";


// Get button
const button = document.getElementById("get-button");


const changeValue = () => {
// When user enters value, the output word should equal the input

    noun1.textContent = inputNoun1.value;
    noun2.textContent = inputNoun2.value;
    noun3.textContent = inputNoun3.value;
    noun4.textContent = inputNoun4.value;

    adjective1.textContent = inputAdjective1.value;

    verb1.textContent = inputVerb1.value;

    royalty.textContent = inputRoyalty.value;

    bodyPart.textContent = inputBodyPart.value;

    preposition.textContent = inputPreposition.value;
    
    adjective2.textContent = inputAdjective2.value;

    verb2.textContent = inputVerb2.value;
    
    adjective3.textContent = inputAdjective3.value;



// Story becomes visible
    document.getElementById("story-box").style.display = "block";

};

// When user clicks button, the changeValue function will run
button.addEventListener('click', changeValue);