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

function insertionSort(arr) {
for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
        arr[j + 1] = key;
}
    return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log("Original Array:", arr);

let sortedArray = insertionSort(arr);
console.log("Sorted Array:", sortedArray);
