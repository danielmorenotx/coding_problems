// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

    let lessDummy = new ListNode();
    let greaterEqualDummy = new ListNode();
    let less = lessDummy; // holds less than x values
    let greater = greaterEqualDummy; // holds greater than or equal to x values

    while (head) {
        if (head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }

        head = head.next;
    }

    less.next = greaterEqualDummy.next;
    greater.next = null;

    return lessDummy.next;
};
