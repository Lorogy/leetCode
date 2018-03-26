/*Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var res=new ListNode(-1);
    res.next=head;
    var temp=res;
    while(temp!=null){
        if(temp.next==null) break;
        var node1=temp.next;
        if(node1.next==null) break;
        var node2=node1.next;
        temp.next=node2;
        node1.next=node2.next;
        node2.next=node1;
        temp=node1;
    }

    return res.next;
};