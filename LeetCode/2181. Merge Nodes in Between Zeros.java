// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.

class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode previousZero = head;
        ListNode current = head.next;

        int valuesTracker = 0;
        
        while (current != null) {
            if (current.val != 0) {
                valuesTracker += current.val;
            } else {
                previousZero.val = valuesTracker;
                
                if (current.next == null) {
                    previousZero.next = null;
                } else {
                    previousZero.next = current;
                    previousZero = previousZero.next;
                    valuesTracker = 0; 
                }
            }
            current = current.next;
        }

        return head;
    }
}
