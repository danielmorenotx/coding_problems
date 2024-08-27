// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem?isFullScreen=true

static boolean hasCycle(SinglyLinkedListNode head) {
    if (head == null) return false;
    
    SinglyLinkedListNode current = head;
    
    HashSet<SinglyLinkedListNode> uniqueNodeCount = new HashSet<>();
    int nodeCount = 0;
    
    while (current != null) {
        uniqueNodeCount.add(current);
        nodeCount++;
        
        if (uniqueNodeCount.size() < nodeCount) {
            return true;
        } else {
            current = current.next;
        }
    }
    
    return false;

}
