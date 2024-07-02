// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

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
var deleteDuplicates = function(head) {

    let dummy = new ListNode();
    dummy.next = head;
    let current = dummy;

    while (head !== null) { // checks if the head node exists
        let hasDuplicates = false;

        // if there are consecutive duplicates, this will move the pointer to the last one
        while (head.next !== null && head.val === head.next.val) { // checks that it's not on the last node and that two consecutive are the same
            head = head.next; // this will move the pointer to the next node
            hasDuplicates = true;
        }

        if (hasDuplicates) {
            current.next = head;
            current = current.next;
        } else {
            current = current.next
        }

        // move head to the next node
        head = head.next;
    }

    return dummy.next;
};
