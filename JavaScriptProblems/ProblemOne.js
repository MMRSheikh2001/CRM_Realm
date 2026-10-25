//to run go to folder in cmd and run 
//    node ProblemOne.js


function firstNonRepeatingChar(str) {
    if (!str) {
        return "Invalid input";
    }
    const counts = new Map();

    // using for of loop, i am counting every char of str ,then putting them in map
    for (const ch of str) {
        const key = ch.toLowerCase();
        counts.set(key, (counts.get(key) || 0) + 1);
    }

    // then using for of i am getting the char whose map value is 1
    for (const ch of str) {
        if (counts.get(ch.toLowerCase()) === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("Mahbub MD"));
console.log(firstNonRepeatingChar("abbbaabcd"));
console.log(firstNonRepeatingChar("AAjkhdffh"));
console.log(firstNonRepeatingChar("hkuykhjf"));
console.log(firstNonRepeatingChar(null));
console.log(firstNonRepeatingChar(" aa"))