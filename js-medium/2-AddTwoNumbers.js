/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.*/

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
var addTwoNumbers = function(l1, l2) {
    var l3=new ListNode(0);
    var rst=l3;
    var temp=0,flag=0;
    if(l1==null&&l2==null) return rst;
    //空链表补0
    while(l1!=null||l2!=null){
        var num1=l1==null?0:l1.val;
        var num2=l2==null?0:l2.val;
        temp=num1+num2+flag;
        if(temp>9){
            flag=1;
            temp=temp%10;
        }else{
            flag=0;
        }
        l3.next=new ListNode(temp);
        l3=l3.next;
        l1=l1==null?null:l1.next;
        l2=l2==null?null:l2.next;
    }
    if(flag==1){
        l3.next=new ListNode(1);
    }

    return rst.next;
};