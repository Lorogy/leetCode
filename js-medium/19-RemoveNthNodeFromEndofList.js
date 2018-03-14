/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var res=new ListNode(-1);
    res.next=head;
    var cur=res.next;
    var len=0;
    while(cur!=null){
        len++;
        cur=cur.next;
    }
    var del=len-n;
    cur=res;
    while(del>0){
        cur=cur.next;
        del--;
    }
    var tmp=cur.next.next;
    cur.next=tmp;
    return res.next;
};