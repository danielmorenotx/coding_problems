/* https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem?isFullScreen=true */

static int findMergeNode(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {
    SinglyLinkedListNode current1 = head1;
    SinglyLinkedListNode current2 = head2;
    
    while (current1 != current2) {
        if (current1 != null) {
            current1 = current1.next;
        } else {
            current1 = head2;
        }
        
        if (current2 != null) {
            current2 = current2.next;
        } else {
            current2 = head1;
        }
    }
    
    return current1.data;
}
