//to run go to folder in terminal and run 
//    node Problem.js

//1st problem

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
console.log(firstNonRepeatingChar(" aa"));


//2nd problem

function findTwoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }

        seen.set(nums[i], i);
    }

    return null;
}

console.log(findTwoSum([1, 2, 3], 5));
console.log(findTwoSum([9, 7, 4], 15));
console.log(findTwoSum([1, 5, 8], 10));
console.log(findTwoSum([10, 20, 21], 41));


//3rd problem



function countLeadsByStatus(leads) {
    const counts = {};

    for (const lead of leads) {
        counts[lead.status] = (counts[lead.status] || 0) + 1;
    }

    return counts;
}

console.log(countLeadsByStatus([
    {
        status: "NEW"
    },
    {
        status: "OLD"
    },
    {
        status: "OLD"
    },

]));
console.log(countLeadsByStatus([]));