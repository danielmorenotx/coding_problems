// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) { // edge case if either has no nodes
        return null;
    }

    // setting pointers starting at the heads of both lists
    let pointA = headA;
    let pointB = headB;

    while (pointA !== pointB) { // while the two linked lists are not exactly identical
        
        // iterate through both lists and add each of them to the end of the other one
        // this makes them the same size, so they will both land on the same node where they merge

        if (pointA === null) { // once it gets to the end of headA
            pointA = headB; // then it sets that node to the node of headB
        } else {
            pointA = pointA.next // or else it will continue to traverse the list until it gets to the end
        }

        // same for B list
        if (pointB === null) {
            pointB = headA;
        } else {
            pointB = pointB.next
        }
    }

    // the loop will be broken when they land on the same node and either node can be returned
    return pointA;
};
