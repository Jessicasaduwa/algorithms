function processSentence(sentence) {
let length = 0;
let words = 0;
let vowels = 0;
let isPreviousCharSpace = true;
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    
    if (char === '.') {
        break;
    }
    length++;

    if ('aeiouAEIOU'.includes(char)) {
    vowels++;
    }

    if (char === ' ') {
        if (!isPreviousCharSpace) {
        words++;
        }
        isPreviousCharSpace = true;
    } else {
            isPreviousCharSpace = false;
    }
    }

    if (!isPreviousCharSpace) {
        words++;
}
console.log("Length of sentence:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);
}

let sentence = "This is a sentence.";
processSentence(sentence);