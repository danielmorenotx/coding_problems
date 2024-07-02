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
    // list1 and list2 are `pointers` to the heads of the lists
    // so initially .val will result in the first element in the list

    let dummy = new ListNode(); // Creates a dummy node with val = 0 and next = null [0]
    // we'll store our merged list in the dummy
    let current = dummy; // `current` points to the dummy node

    // check if the two lists are empty
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) { // checks which value is bigger
            current.next = list1; // if so, it adds the list1 node to the dummy 
            list1 = list1.next; // moves the pointer to the next element
        } else {
            current.next = list2; // adds list2 node to the dummy list
            list2 = list2.next; // moves the pointer to the next element in the list
        }
        current = current.next; // moves the current pointer to the next node
    }

    // If a list pointer is not empty, append it until it is at the end 
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // The dummy node's next points to the head of the merged list
    return dummy.next; // returning the originally created placeholder
};
