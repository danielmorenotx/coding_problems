/**
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {

    // a linked list value will be the head of the list

    let dummy = new ListNode(); // creates a starting point for the linked lists;
    // because no values are passed, val === 0 and next === null;
    let current = dummy; // keep track of the merged lists, will be returned

    // check if the two lists are empty
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) { // checks if starting value of list is bigger in list 1 or 2
            current.next = list1; // if so, sets the current to the value of list2
            list1 = list1.next; //
        } else { // checks if they are the same or if list1.val is bigger
            current.next = list2; // now pointing to list2
            // linked list traversal
            list2 = list2.next; // moves the variable of the list2 to the next variable in the list
        }
        current = current.next;
    }

    // If one of the lists is not empty, append it
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // The dummy node's next points to the head of the merged list
    return dummy.next; // returning the originally created placeholder
};
