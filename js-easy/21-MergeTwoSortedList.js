/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1,l2) {
    var tmp=new ListNode(-1);
    if(l1==null) return l2;
    if(l2==null) return l1;

    var l3=tmp;

    while(l1&&l2&&l1.val!=undefined&&l2.val!=undefined){
      if(l1.val<l2.val){
        tmp.next=l1;
        l1=l1.next;
      }else{
        tmp.next=l2;
        l2=l2.next;
      }
      tmp=tmp.next;
    }

    if(l1&&l1.val!=undefined){
      tmp.next=l1;
    }
    if(l2&&l2.val!=undefined){
      tmp.next=l2;
    }

    return l3.next;
    
};
