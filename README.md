# CRM Realm | Junior Software Engineer Intern Assessment

Submission for the CRM Realm Junior Software Engineer Intern assessment.

| Part | Folder | Contents |
|---|---|---|
| A | `SimpleLeadTracker/` | Java console app to add and view leads (`Lead.java`, `Priority.java`, `LeadService.java`, `SimpleLeadTracker.java`) |
| B | `JavaScriptProblems/` | Three JavaScript functions with test calls (`Problem.js`) |
| C | `SQLBasicsUsingMySQL/` | MySQL queries (`ProblemOne.sql`, `ProblemTwo.sql`) |

## How to run

### Part A: Java application

Requires JDK 11 or newer.

```bash
cd SimpleLeadTracker
javac SimpleLeadTracker.java
java SimpleLeadTracker
```

`javac SimpleLeadTracker.java` also compiles `Lead`, `LeadService` and `Priority`, because the main class uses them.

Menu: `1` Save Lead, `2` See all Leads, `3` Exit.

### Part B: JavaScript functions

Requires Node.js.

```bash
cd JavaScriptProblems
node Problem.js
```

`Problem.js` contains the three functions and test calls under each one. The results are printed to the console.

### Part C: SQL

Written for **MySQL**. Run the files in MySQL Workbench or the `mysql` CLI against a `leads` table with the columns `id`, `name`, `email`, `score`.

- `ProblemOne.sql`: all HOT leads (`score >= 80`). It uses the schema name `testschema`, so change `testschema.leads` if your schema has a different name.
- `ProblemTwo.sql`: the number of HOT, WARM and COLD leads, returned as one row with three columns.

## Main idea behind each JavaScript solution

**1. `firstNonRepeatingChar`**
Two passes over the string. The first pass counts every character in a `Map`, using the lowercase form as the key so `A` and `a` count as the same letter. The second pass walks the original string and returns the first character whose count is 1, so the result keeps its original case. It returns `null` if no character appears exactly once. Spaces and punctuation are treated like any other character.

**2. `findTwoSum`**
One pass with a `Map` of `value -> index`. For each number, calculate `target - number` and check whether that value was already seen. If it was, return both indices. If not, store the current number. The check happens before the store, so an element can never be paired with itself. This is O(n), compared with O(n²) for nested loops.

**3. `countLeadsByStatus`**
Loop through the leads and keep a counter object keyed by status: `counts[status] = (counts[status] || 0) + 1`. No status names are hard-coded, so new statuses work automatically. The input array is only read, never changed.

## Test cases

### Java (Simple Lead Tracker)

| Input | Expected result |
|---|---|
| Score `0` | Saved, priority COLD |
| Score `49` | Saved, priority COLD |
| Score `50` | Saved, priority WARM |
| Score `79` | Saved, priority WARM |
| Score `80` | Saved, priority HOT |
| Score `100` | Saved, priority HOT |
| Score `-1` or `101` | Rejected: "Score must be a number from 0 to 100." |
| Score left empty | Rejected: "Score must be a number from 0 to 100." |
| Score `abc` | Rejected: "score must be a whole number." |
| Empty name | Rejected: "Name cannot be empty." |
| Empty email | Rejected: "Email cannot be empty." |
| View leads when none were added | "There are no leads to show" |

### JavaScript

| Function | Input | Expected |
|---|---|---|
| `firstNonRepeatingChar` | `"aabbcdd"` | `"c"` |
| `firstNonRepeatingChar` | `"swiss"` | `"w"` |
| `firstNonRepeatingChar` | `"aabb"` | `null` |
| `firstNonRepeatingChar` | `""` | `null` |
| `firstNonRepeatingChar` | `"sTreSS"` | `"T"` (counted case-insensitively, original case returned) |
| `firstNonRepeatingChar` | `"aA"` | `null` |
| `firstNonRepeatingChar` | `" aa"` | `" "` (a space is a character too) |
| `firstNonRepeatingChar` | `null` | `"Invalid input"` |
| `findTwoSum` | `[2, 7, 11, 15], 9` | `[0, 1]` |
| `findTwoSum` | `[3, 2, 4], 6` | `[1, 2]` (index 0 is not reused) |
| `findTwoSum` | `[3, 3], 6` | `[0, 1]` |
| `findTwoSum` | `[1, 2, 3], 10` | `null` |
| `countLeadsByStatus` | the four-lead example from the task | `{ NEW: 2, CONTACTED: 1, QUALIFIED: 1 }` |
| `countLeadsByStatus` | `[]` | `{}` |

## Decision / assumption

- **Priority is calculated, not stored.** `LeadService.calculatePriority(score)` derives HOT, WARM or COLD from the score every time it is needed. A stored priority field could disagree with the score after an edit.
- **Validation happens in `LeadService.save`.** A lead with an empty name, an empty email or a score outside 0-100 is rejected with an `IllegalArgumentException` before it reaches the list. The menu prints the message and keeps running.
- **Spaces and punctuation count as characters** in `firstNonRepeatingChar`, because the task says "first character", not "first letter".
- **SQL assumes `score` is never NULL** and is always between 0 and 100.

## What I would improve with more time

- Make `Lead` immutable (final fields set in a constructor, or a `record`) and remove the setters. Right now a saved lead could be changed to an invalid score later, because validation only runs in `save`.
- Read the menu choice with `nextLine()` and parse it, so typing a letter or pressing Enter at the menu does not close the program or wait silently.
- Add automated tests (JUnit for Java, Jest for JavaScript) instead of printing results to the console.
- Validate the email format, and add a `.gitignore` so compiled `.class` files are not committed.

## AI assistance disclosure

This README file was generated with the help of Claude (Anthropic AI).
