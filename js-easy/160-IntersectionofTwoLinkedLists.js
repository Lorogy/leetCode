/*Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.*/


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
    if(headA==null||headB==null) return null;
    var lenA=getLen(headA);
    var lenB=getLen(headB);
    if(lenA>lenB) {
        for(var i=0;i<(lenA-lenB);i++) headA=headA.next;
    }
    if(lenA<lenB) {
        for(var j=0;j<(lenB-lenA);j++) headB=headB.next;
    }
    while(headA!=null&&headB!=null&&headA!=headB){
        headA=headA.next;
        headB=headB.next;
    }
    if(headA!=null&&headB!=null) return headA;
    else return null;
};

function getLen(head){
    var cur=0;
    while(head!=null){
        cur++;
        head=head.next;
    }
    return cur;
}