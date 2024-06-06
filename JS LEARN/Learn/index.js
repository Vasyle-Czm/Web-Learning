let word = "vvsea";
let myword = "example"; // Exemplu pentru myword
let excludedLetter = 'a'; // Litera pe care nu dorești să o verifici

// Verificăm toate literele din myword cu excepția excludedLetter
let allLettersIncluded = true;

for (let i = 0; i < myword.length; i++) {
    let currentChar = myword.charAt(i);

    if (currentChar !== excludedLetter && !word.includes(currentChar)) {
        allLettersIncluded = false;
        break; // Nu mai este nevoie să continuăm verificarea dacă găsim o literă lipsă
    }
}

if (allLettersIncluded) {
    console.log(`Toate literele din myword, cu excepția lui '${excludedLetter}', sunt prezente în word.`);
} else {
    console.log(`Cel puțin una dintre literele din myword, cu excepția lui '${excludedLetter}', lipsește din word.`);
}