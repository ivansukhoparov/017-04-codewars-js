/*
Sentence Smash

Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// old solution

function smash(words) {
    let sentence = ''
    words.forEach((word, index) => {
        sentence += word; // add word to sentence variable
        if (index < words.length - 1) { // check the variable 'word' is the last one in the array and add space between words if no 
            sentence += ' ';
        }
    })
    return sentence;
};

// new solution

function smash(words) {

    let sentence = '';
    words.forEach((el) => {
        sentence += el;
        sentence += ' ';
    })
    return sentence.substring(0, sentence.length - 1)
};