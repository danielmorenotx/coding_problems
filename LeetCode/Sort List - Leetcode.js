// Given the head of a linked list, return the list after sorting it in ascending order.

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
var sortList = function(head) {
    if (!head || !head.next) return head; // if there are no nodes or just 1 node

    // create function to split the list into two halves
    const splitList = (head) => {
        let slow = head;
        let fast = head;
        let prev = null;

        while (fast && fast.next) {
            // when fast arrives at the end of the list, then prev will be at the halfway point
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // split the list by setting prev.next to null, which changes the pointer to null
        prev.next = null;
        return slow; // slow is at the head of the second half of the list
    }

        // Function to merge two sorted lists
    const mergeLists = (l1, l2) => {
        let dummy = new ListNode(0); // create dummy node in which to put sorted nodes
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 ? l1 : l2;
        return dummy.next;
    };

    // Recursive merge sort function
    const mergeSort = (head) => {
        if (!head || !head.next) { // if there is no node or one node, it is returned
            return head;
        }

        // will split the list in half and sort them
        let mid = splitList(head); // returns the head of the second half of the list
        let left = mergeSort(head);
        let right = mergeSort(mid);

        return mergeLists(left, right);
    };

    return mergeSort(head);
};
