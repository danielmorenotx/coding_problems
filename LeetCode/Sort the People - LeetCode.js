// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    // create a list of objects
    let people = names.map((name, index) => (
        {
            name: name,
            height: heights[index]
        }
    ));

    // sort the array by height in descening order
    people.sort((a, b) => b.height - a.height); // sorts in place

    // extract the sorted list from the objects
    // for every person, return person.name
    return people.map(person => person.name);
};
