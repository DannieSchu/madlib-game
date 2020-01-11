
// Noun
const inputNoun = document.getElementById("input-noun");

const noun = document.getElementById("noun");

const noun1 = document.getElementById("noun-1");


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

    adjective1.textContent = inputAdjective1.value;

    verb1.textContent = inputVerb1.value;

    royalty.textContent = inputRoyalty.value;

    bodyPart.textContent = inputBodyPart.value;

    preposition.textContent = inputPreposition.value;

    noun.textContent = inputNoun.value;
    noun1.textContent = inputNoun.value;

    adjective2.textContent = inputAdjective2.value;

    verb2.textContent = inputVerb2.value;
    
    adjective3.textContent = inputAdjective3.value;

// Story becomes visible
    document.getElementById("story-box").style.display = "block";

};

// When user clicks button, the changeValue function will run
button.addEventListener('click', changeValue);