// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    // goal: reverse the pointers

    let current = head; // pointer that will point to the next element
    let prev = null; // pointer that will point backwards from the head
    let next = null; // second pointer that will point backwards from the head

    // current.next is the POINTER that will point to the next element of the list
    // if a pointer is equal to null, it then it will be at the beginning or end of the list

    while (current !== null) { // if the current element in the list is not null (this is the case if there is anything in the list)
        next = current.next; // store the pointer in next (initially this will be to the second element in the list)
        current.next = prev; // changing the current pointer to prev (since prev is initially null, it will point backwards from the head)
        prev = current; // changes previous to current (initially this is the first element of the list)
        current = next; // current is set to next (initially, this is the second element of the list)
    }

    return prev;
};
