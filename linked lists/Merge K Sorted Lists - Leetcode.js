// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    // first we merge two lists
    const mergeLists = (l1, l2) => {

        let dummy = new ListNode(0); // create dummy node in which to put sorted nodes
        let current = dummy;

        // this will sort and merge any two lists
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

    // this will keep updating the first element of our given list with a sorted list of the first two elements of `lists`
    for (let i = 1; i < lists.length; i++) {
        lists[0] = mergeLists(lists[0], lists[i])
    }

    return lists[0];
};
