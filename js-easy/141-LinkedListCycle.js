/*Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow=head;
    var fast=head;
    while(slow!=null&&fast!=null&&fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast) return true;
    }
    return false;
};